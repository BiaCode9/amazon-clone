const functions = require('firebase-functions');

const express = require("express");

const cors = require("cors");
const { AppsSharp } = require('@material-ui/icons');

const stripe = require("stripe")('sk_test_51HUNG6Fh9Y9psLFszb217vxCXSWbySMgDZkIgMYZnjst5i8yGgnuhCTwMu5KUjK2OculwQ25lwMDNnn0XmFmG2ql00Wl85O5vv');

//  API

// App config

const app = express();


// Middlewares

app.use(cors({ origin: true }));

app.use(express.json());

// API Routes

app.get('/', (request, response) => response.status(200).send('hello world'))

// Listen Command

exports.api = functions.https.onRequest(app)

