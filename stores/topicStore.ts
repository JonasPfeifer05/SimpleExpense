import type {SubTopic, Topic} from "~/types/entryData";

export interface TopicStoreState {
    topics: Topic[],
    subTopics: SubTopic[]
}

export const useTopicStore = defineStore("topic", {
    state: (): TopicStoreState => ({
        topics: [],
        subTopics: [],
    }),
    actions: {
        fetchTopics() {
            this.topics = [{id: 1, name: "general"}, {id: 2, name: "school"}, {id: 3, name: "naomi"}];
        },
        fetchSubTopics() {
            this.subTopics = [
                {
                    id: 1,
                    name: "food",
                    icon: "🍖",
                },
                {
                    id: 2,
                    name: "gas",
                    icon: "⛽",
                }
            ];
        }
    }
})