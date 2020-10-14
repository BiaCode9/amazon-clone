const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HUNG6Fh9Y9psLFszb217vxCXSWbySMgDZkIgMYZnjst5i8yGgnuhCTwMu5KUjK2OculwQ25lwMDNnn0XmFmG2ql00Wl85O5vv')