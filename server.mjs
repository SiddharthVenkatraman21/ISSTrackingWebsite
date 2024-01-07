import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/iss-position', async (req, res) => {
    try {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching ISS data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
