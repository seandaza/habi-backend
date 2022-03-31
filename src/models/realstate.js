const {schemma, model} = require('mongoose');

const realstateSchema = schema({
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
    }
},{
    collection: 'realstate'
});

module.exports = model('Realstate', realstateSchema);