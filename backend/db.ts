import {connect} from "ts-postgres";

export default await connect({
    port: 5432,
    host: "database",
    user: "admin",
    password: "admin",
    database: "simpleexpense",
});