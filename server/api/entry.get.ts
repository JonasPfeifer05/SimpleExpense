import {EntryData} from "~/types/entryData";

export default defineEventHandler(async (): Promise<EntryData[]> => {
    const db = useDatabase();

    let result = await db.sql
        `SELECT e.amount,
                t.id   as topic_id,
                t.name as topic_name,
                s.id   as subtopic_id,
                s.name as subtopic_name,
                s.icon as subtopic_icon
         FROM entry e
                  JOIN topic t ON e.topic_id = t.id
                  JOIN subtopic s ON e.subtopic_id = s.id
         ORDER BY e.id DESC`;

    return result.rows!.map((value): EntryData => {
        return {
            amount: parseInt(value.amount as string),
            subTopic: {
                id: value.subtopic_id as number,
                name: value.subtopic_name as string,
                icon: value.subtopic_icon as string,
            },
            topic: {
                id: value.topic_id as number,
                name: value.topic_name as string
            },
        }
    });
})