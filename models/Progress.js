const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    progress: { type: Number, required: true }, // Percentage
    score: { type: Number, required: true },
});

module.exports = mongoose.model('Progress', progressSchema);
