require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
const Routes = require('./app/routes/api');
app.use('/users', Routes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});