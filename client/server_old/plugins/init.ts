import { readFileSync } from 'fs';

export default defineNitroPlugin(async (nitroApp) => {
    const db = useDatabase();

    const sql = readFileSync("./init.sql").toString();

    await db.exec(sql);
    console.log("Ran init script")
})