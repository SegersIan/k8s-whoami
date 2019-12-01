const express = require('express');
const app = express();
const PORT = 3000;
const POD_NAME = process.env.POD_NAME || 'No POD_NAME specified';

app.get('/', (req, res) => {
    const now = new Date();
    console.log(`WHOAMI received request on route "/" at ${now.toISOString()}`);
    res.json({
        message: `Hello World!`,
        timestamp: now.getTime(),
        timeUtc: now.toISOString(),
        podName: POD_NAME
    });


});

app.listen(PORT, () => console.log(`WHOAMI listening on port ${PORT}`));