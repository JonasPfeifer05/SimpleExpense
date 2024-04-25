<script setup lang="ts">
import type {EntryData} from "~/types/entryData";

const colorMode = useColorMode();
console.log(colorMode.value);

const entries: EntryData[] = [
    {
        topic: "school",
        sub_topic: {
            name: "food",
            icon: "🍖",
        },
        amount: -6.70
    },
    {
        topic: "school",
        sub_topic: {
            name: "gas",
            icon: "⛽",
        },
        amount: -20.00
    },
    {
        topic: "naomi",
        sub_topic: {
            name: "food",
            icon: "🍖",
        },
        amount: -17.99
    },
    {
        topic: "general",
        sub_topic: {
            "name": "pocket money",
            "icon": "👛",
        },
        amount: 70.00
    }
];

function positiveNegative(value: number, positive: any, negative: any): any {
    if (value < 0) return negative;
    return positive;
}

function formatAmount(amount: number): string {
    return amount.toFixed(2).toString();
}
</script>

<template>
    <div id="container">
        <div id="app-bar">Summary</div>
        <div id="content">
            <div id="balance">
                99.99€
            </div>
            <div id="entries">
                <div class="entry" v-for="entry in entries">
                    <div class="entry-icon">{{ entry.sub_topic.icon }}</div>
                    <div class="entry-topic">
                        <div class="title">{{ entry.sub_topic.name }}</div>
                        <div class="sub-title">{{ entry.topic }}</div>
                    </div>
                    <div class="entry-amount" :style="{ color: positiveNegative(entry.amount , '#50C878', '#f00') }">
                         {{ positiveNegative(entry.amount, "+", "") }}{{ formatAmount(entry.amount) }}€
                    </div>
                </div>
            </div>
        </div>
        <div id="bottom-bar">
            <div/>
            <div id="add-container">
                <button id="add-button">
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

        .entry {
            display: flex;
            align-items: center;

            width: 100%;
            height: 60px;

            margin: 0 0 12px 0;
            padding: 0 10px;
            box-sizing: border-box;

            border-radius: 8px;

            background: var(--surface-300);

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
    background: var(--surface-200);

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