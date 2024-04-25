import type {SubTopic} from "~/types/entryData";

export interface TopicStoreState {
    topics: string[],
    subTopics: SubTopic[]
}

export const useTopicStore = defineStore("topic", {
    state: (): TopicStoreState => ({
        topics: [],
        subTopics: [],
    }),
    actions: {
        fetchTopics() {
            this.topics = ["general", "school", "naomi"];
        },
        fetchSubTopics() {
            this.subTopics = [
                {
                    name: "food",
                    icon: "🍖",
                },
                {
                    name: "gas",
                    icon: "⛽",
                }
            ];
        }
    }
})