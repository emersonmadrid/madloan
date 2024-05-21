const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Loan', loanSchema);
