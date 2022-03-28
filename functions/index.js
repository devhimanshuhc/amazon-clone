const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Khx9CSCiSrl36zDtwP8yxAbkBl9YwSf4jdurL0SZRAaBU8QtaZalU7r0FAZLAZxl4aPBzHku9r3XnhekiZri7KB00Bfo6n1xX"
);

const app = express();
app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request recieved", total);

  const paymentIntents = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntents.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//("http://localhost:5001/fir-c267f/us-central1/api");
