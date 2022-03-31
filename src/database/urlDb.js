let user = process.env.USER;
let password = process.env.PASS;
const database  = "db_habi";

module.exports = {
    cloud_db: `mongodb+srv://${user}:${password}@cluster0.ojjms.mongodb.net/${database}`,
    local_db: `mongodb://localhost:27017/${database}`
}