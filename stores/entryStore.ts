import {defineStore} from "pinia";
import type {EntryData} from "~/types/entryData";

export interface EntryStoreState {
    entries: EntryData[],
}

export const useEntryStore = defineStore("entry", {
    state: (): EntryStoreState => ({
        entries: []
    }),
    getters: {
        balance: (state) => {
            return state.entries.reduce((sum, entry) => sum + entry.amount, 0);
        }
    },
    actions: {
        fetchEntries() {
            this.entries = [
                {
                    topic: "school",
                    subTopic: {
                        name: "food",
                        icon: "🍖",
                    },
                    amount: -6.70
                },
                {
                    topic: "school",
                    subTopic: {
                        name: "gas",
                        icon: "⛽",
                    },
                    amount: -20.00
                },
                {
                    topic: "naomi",
                    subTopic: {
                        name: "food",
                        icon: "🍖",
                    },
                    amount: -17.99
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                },
                {
                    topic: "general",
                    subTopic: {
                        "name": "pocket money",
                        "icon": "👛",
                    },
                    amount: 70.00
                }
            ];
        },
        addEntry(entry: EntryData) {
            this.entries.push(entry);
        }
    }
});