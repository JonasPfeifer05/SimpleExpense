export default defineEventHandler(async event => {
    const db = useDatabase();

    const body: { name: string } = await readBody(event);

    db.sql`INSERT INTO topic(name) VALUES (${body.name})`
})