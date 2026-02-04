require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
connectDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// CONNECT ROUTES
const apiRoutes = require('./src/routes/apiRoutes');
app.use(BASE_URI, apiRoutes);
app.use(process.env.BASE_URI, apiRoutes);

// START SERVER HELLO

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});
