/* eslint-disable no-eval */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51J5EHJSEzMLO0wLKuzcB0cLS4gKs80nslkWNN4V4HjjF6twsxgTNxq4BBslOiVYnMuWIInhRRSkygTWrIrogyDU0000q3nsKNG");

// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// app config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get("/", (req, res) =>res.status(200).send("hello from firebase functiions"));


app.post("/payment/create", async (req, res) =>{
  const total = req.query.total;

  console.log("payment request received !!! ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({amount: total, currency: "INR"});
    // console.log("ppppppppppppp", paymentIntent.client_secret)
    // pi_3MGTHhSEzMLO0wLK1uBx89RG_secret_H3ViNLf0tWwMZ68fjZo9oGeWU

    res.status(201).send({status: `payment request received !!! ${total}`, clientSecret: paymentIntent.client_secret});
  } catch (e) {
    console.log("error - ", e.type, e.code);
    res.status(404).send({status: `payment failed !!! ${total}`});
  }
}
);


// listen command
// exports.api = functions.https.onRequest((req, res) => {res.send("Hello from Firebase!");});
exports.api = functions.https.onRequest(app);


// http://127.0.0.1:5001/amazing-prime-clone/us-central1/api
