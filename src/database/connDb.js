const mongoose = require('mongoose');
const { local_db } = require('./urlDb');

class ConnDb {
    constructor() {
        this.conn = mongoose.connection();
    }

    async connection() {
        this.conn = await mongoose.connect(local_db);
    }
}

module.exports = ConnDb;