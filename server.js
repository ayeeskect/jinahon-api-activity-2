require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
connectDB();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Add this AFTER middleware, BEFORE other routes
app.post('/test', (req, res) => {
    console.log('Test body:', req.body);
    res.json({ received: req.body });
});

// CONNECT ROUTES 
const apiRoutes = require('./src/routes/apiRoutes');
const chefRoutes = require('./src/routes/chefRoutes');
app.use(BASE_URI, apiRoutes);
app.use(`${BASE_URI}/chefs`, chefRoutes);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});