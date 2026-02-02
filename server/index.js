import apiRoutes from './routes/index.js';

const express = require('express');

const app = express();

//cores goes here
app.use(express.json());

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${port}`);
});