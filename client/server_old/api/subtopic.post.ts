export default defineEventHandler(async event => {
    const db = useDatabase();

    const body: { name: string, icon: string } = await readBody(event);

    db.sql`INSERT INTO subtopic(name, icon) VALUES (${body.name}, ${body.icon})`
})