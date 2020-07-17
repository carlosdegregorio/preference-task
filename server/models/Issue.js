const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true,
        default: 'High',
        enum: ['High', 'Medium','Low']
    },
    status: {
        type: String,
        required: true,
        default: 'Todo',
        enum: ['Todo', 'Doing','Done']
    },
});
module.exports = mongoose.model('Issue', IssueSchema);