const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    assignedTo: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Accepted', 'Completed'], default: 'Pending' },
});

module.exports = mongoose.model('Project', projectSchema);
