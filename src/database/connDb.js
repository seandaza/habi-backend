const mongoose = require('mongoose');
const { local_db, cloud_db } = require('./urlDb');

class ConnDb {
    constructor() {
        this.connection();
    }

    async connection() {
        this.conn = await mongoose.connect(cloud_db);
    }
}

module.exports = ConnDb;