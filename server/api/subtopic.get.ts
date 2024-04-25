export default defineEventHandler(async () => {
    const db = useDatabase();

    let result = await db.sql
        `SELECT id, name, icon
         FROM subtopic`;
    return result.rows;
})