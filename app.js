// Basic Libaries and Modules import
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser')
const path = require('path');

// Security Middleware import
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const { default: mongoose } = require('mongoose');

// Security Middleware use
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(rateLimit());

// Body Parser Implementation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request Rate Limit
const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,max: 3000 // 15 minutes
})
app.use(limiter)

// MongoDB Database Connection
let URI = "mongodb+srv://<username>:<password>@cluster0.bstsr.mongodb.net/mern-crud?retryWrites=true&w=majority"
let OPTIONS = {user: 'admin', pass: 'tushar'}
mongoose.connect(URI, OPTIONS, (error)=>{
        console.log("Connected to MongoDB");
        console.log(error);
})

// API Routes
app.use('/api/v1', router);

// Add React Front  End Routing
app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
module.exports = app;