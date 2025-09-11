require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
app.get('/search-images', async (req, res) => {
const { query, page = 1 } = req.query;
if (!query) {
return res.status(400).json({ error: "Query parameter is required" });
}
const url = `https://api.unsplash.com/search/photos`;
try {
const response = await axios.get(url, {
params: {
page,
query,
client_id: ACCESS_KEY
}
});
res.json(response.data);
} catch (error) {
console.error('Unsplash API Error:', error.message);
res.status(500).json({ error: 'Failed to fetch images from Unsplash' });
}
});
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
