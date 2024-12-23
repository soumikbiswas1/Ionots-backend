const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Get progress for a project
router.get('/:projectId', async (req, res) => {
    try {
        const progress = await Progress.findOne({ projectId: req.params.projectId });
        if (!progress) return res.status(404).json({ message: 'Progress not found' });
        res.json(progress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update progress
router.post('/', async (req, res) => {
    const { projectId, progress, score } = req.body;
    try {
        let progressDoc = await Progress.findOne({ projectId });
        if (!progressDoc) {
            progressDoc = new Progress({ projectId, progress, score });
        } else {
            progressDoc.progress = progress;
            progressDoc.score = score;
        }
        const savedProgress = await progressDoc.save();
        res.status(200).json(savedProgress);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
