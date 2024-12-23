const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");



const projectRoutes = require('./routes/projectRoutes');
const progressRoutes = require('./routes/progressRoutes');

const app = express();
dotenv.config();
const PORT = 3000;

const mongoURI = process.env.MONGOURI;
// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/progress', progressRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
