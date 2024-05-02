import {connect} from "ts-postgres";

export default await connect({
    port: 5432,
    host: "localhost",
    user: "admin",
    database: "simpleexpense",
    password: "admin",
});