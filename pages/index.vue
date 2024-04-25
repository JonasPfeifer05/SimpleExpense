<script setup lang="ts">
import {useEntryStore} from "~/stores/entryStore";
import {useTopicStore} from "~/stores/topicStore";
import {useAddBottomSheetStore} from "~/stores/addBottomSheetStore";
import type {SubTopic} from "~/types/entryData";

const colorMode = useColorMode();
console.log(colorMode.value);

const entryStore = useEntryStore();
const topicStore = useTopicStore();
const addBottomSheetStore = useAddBottomSheetStore();

let topic: string;
let subTopic: SubTopic;
let amount: number|null;
let error = ref("");

onMounted(() => {
    entryStore.fetchEntries()
    topicStore.fetchTopics();
    topicStore.fetchSubTopics();

    clearModal();
})

function positiveNegative(value: number, positive: any, negative: any): any {
    if (value < 0) return negative;
    return positive;
}

function formatAmount(amount: number): string {
    return amount.toFixed(2).toString();
}

function showAddBottomSheet() {
    addBottomSheetStore.show();
}

function hideAddBottomSheet() {
    addBottomSheetStore.hide();
}

function addEntry() {
    if (amount == null) {
        error.value = "Must enter an amount!"
        return;
    }

    error.value = "";
    entryStore.addEntry({topic, subTopic, amount});
    clearModal();
    addBottomSheetStore.hide();
}

function clearModal() {
    topic = topicStore.topics[0];
    subTopic = topicStore.subTopics[0];
    amount = null;
}
</script>

<template>
    <div id="container">
        <div id="add-bottom-sheet" :style="{ display: addBottomSheetStore.display ? 'flex' : 'none' }"
             @click="hideAddBottomSheet">
            <div id="sheet" @click.stop>
                <select id="topic-selector" v-model="topic">
                    <option value="topic" disabled>Topic</option>
                    <option :value="topic" v-for="topic in topicStore.topics">{{ topic }}</option>
                </select>
                <select id="subtopic-selector" v-model="subTopic">
                    <option value="subtopic" disabled>Subtopic</option>
                    <option :value="subTopic" v-for="subTopic in topicStore.subTopics">{{ subTopic.icon }}
                        ({{ subTopic.name }})
                    </option>
                </select>
                <input type="number" id="amount-input" step="0.01" placeholder="The amount" v-model.number="amount">
                <div id="add-entry-container">
                    <button id="add-entry-button" @click="addEntry">Add</button>
                    <span :style="{ visibility: error == '' ? 'hidden' : 'visible' }">{{ error }}</span>
                </div>
            </div>
        </div>

        <div id="app-bar">Summary</div>
        <div id="content">
            <div id="balance">
                {{formatAmount(entryStore.balance)}}€
            </div>
            <div id="entries">
                <div class="entry" v-for="entry in entryStore.entries">
                    <div class="entry-icon">{{ entry.subTopic.icon }}</div>
                    <div class="entry-topic">
                        <div class="title">{{ entry.subTopic.name }}</div>
                        <div class="sub-title">{{ entry.topic }}</div>
                    </div>
                    <div class="entry-amount" :style="{ color: positiveNegative(entry.amount , '#50C878', '#E5554E') }">
                        {{ positiveNegative(entry.amount, "+", "") }}{{ formatAmount(entry.amount) }}€
                    </div>
                </div>
            </div>
        </div>
        <div id="bottom-bar">
            <div/>
            <div id="add-container">
                <button id="add-button" @click="showAddBottomSheet">
                    <Icon id="add-icon" name="material-symbols:add"></Icon>
                </button>
            </div>
            <div id="analytics-container">
                <button id="analytics-button">
                    <Icon id="analytics-icon" name="material-symbols:analytics-outline"></Icon>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#add-bottom-sheet {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: end;

    height: 100vh;
    width: 100vw;

    #sheet {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100vw;
        height: 400px;

        padding: 32px;
        gap: 16px;
        box-sizing: border-box;

        background: var(--surface-mixed-200);

        border-radius: 8px;

        & > input, select, button {
            height: 45px;

            border-radius: 8px;

            background: var(--surface-mixed-300);

            color: var(--color);

            outline: none;

            border: var(--surface-mixed-300) 1px solid;

            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;

            padding: 0 8px;
            font-size: 16px;
        }

        #add-entry-container {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            #add-entry-button {
                width: 100%;
                background: var(--primary-100);
            }

            span {
                height: 14px;
                font-size: 14px;
                color: #E5554E;
            }
        }

        & > *:focus {
            outline: none;
            border: var(--primary-300) 1px solid;
        }

    }
}

#container {
    height: 100vh;
}

#app-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 25px;
    height: 75px;
}

#content {
    display: flex;
    flex-direction: column;

    height: calc(100% - 75px - 75px);

    #balance {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 150px;
        font-size: 50px;

        color: #50C878;
    }

    #entries {
        flex: 1;

        padding: 16px 26px;
        box-sizing: border-box;

        overflow-y: scroll;

        scrollbar-color: var(--surface-mixed-200) transparent;
        scrollbar-width: thin;

        .entry {
            display: flex;
            align-items: center;

            width: 100%;
            height: 60px;

            margin: 0 0 12px 0;
            padding: 0 10px;
            box-sizing: border-box;

            border-radius: 8px;

            background: var(--surface-mixed-300);

            .entry-icon {
                display: flex;
                justify-content: center;
                align-items: center;

                height: 75%;
                aspect-ratio: 1;

                font-size: 25px;
            }

            .entry-topic {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
                flex: 1;

                .title {
                    font-size: 18px;
                }

                .sub-title {
                    font-size: 12px;
                }
            }

            .entry-amount {
                display: flex;
                justify-content: center;
                align-items: center;

                width: fit-content;
                font-size: 18px;
            }
        }
    }
}

#bottom-bar {
    display: flex;
    align-items: center;
    height: 75px;
    background: var(--surface-mixed-200);

    & > * {
        flex: 1;
        height: 70%;
    }

    #add-container, #analytics-container {
        display: flex;
        justify-content: center;

        #add-button, #analytics-button {
            height: 100%;
            aspect-ratio: 1;

            border: none;
            border-radius: 40%;

            #add-icon, #analytics-icon {
                height: 65%;
                width: 65%;

                cursor: pointer;

                color: var(--color);
            }
        }

        #add-button {
            background: var(--primary-100);
        }

        #analytics-button {
            background: transparent;
        }
    }
}
</style>