const {Schema, model} = require('mongoose');

const realstateSchema = Schema({
    area: {
        type: Number,
    },
    num_hab: {
        type: Number,
    },
    price: {
        type: Number,
    },
    address: {
        type: String,
    },
    user_id: {
        type: String,
    }
},{
    collection: 'realstate'
});

module.exports = model('Realstate', realstateSchema);