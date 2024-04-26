export default defineEventHandler(async event => {
    const db = useDatabase();

    const body: { topic_id: number, subtopic_id: number, amount: number } = await readBody(event);

    db.sql`INSERT INTO entry(topic_id, subtopic_id, amount) VALUES (${body.topic_id}, ${body.subtopic_id}, ${body.amount})`
})