export default defineEventHandler(async () => {
    const db = useDatabase();

    let result = await db.sql
        `SELECT id, name
         FROM topic`;
    return result.rows;
})