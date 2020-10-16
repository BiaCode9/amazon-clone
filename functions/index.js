const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HUNG6Fh9Y9psLFszb217vxCXSWbySMgDZkIgMYZnjst5i8yGgnuhCTwMu5KUjK2OculwQ25lwMDNnn0XmFmG2ql00Wl85O5vv"
);

// What we need to set up an API

// - App config
const app = express();

// - Middlewares
// cors is security
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
//dummy route / test / emulate to debug
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/bia", (request, response) => response.status(200).send("Hello Bia"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  //debug console log
  console.log("Payment Request Received for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });

  // okay - created payment intent
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
// how to get it up and running
exports.api = functions.https.onRequest(app);

//Example endpoint:
// http://localhost:5001/clone-79dcf/us-central1/api
