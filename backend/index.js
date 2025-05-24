// 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// index
const index = express();

// middleware
index.use(cors());
index.use(express.json());