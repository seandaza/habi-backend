
const database  = "db_habi";

module.exports = {
    cloud_db: `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.ojjms.mongodb.net/${database}`,
    local_db: `mongodb://localhost:27017/${database}`
}