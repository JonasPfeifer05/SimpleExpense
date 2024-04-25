import {EntryData} from "~/types/entryData";

export default defineEventHandler(async (): Promise<EntryData[]> => {
    const db = useDatabase();

    let result = await db.sql
        `SELECT e.amount, t.name as topic_name, s.name as subtopic_name, s.icon as subtopic_icon
         FROM entry e
                  JOIN topic t ON e.topic_id = t.id
                  JOIN subtopic s ON e.subtopic_id = s.id`;
    return result.rows!.map((value): EntryData => {
        return {
            amount: value.amount as number,
            subTopic: {
                name: value.subtopic_name as string,
                icon: value.subtopic_icon as string,
            },
            topic: value.topic_name as string,
        }
    });
})