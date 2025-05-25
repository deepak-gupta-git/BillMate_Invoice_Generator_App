const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
const router = require("../backend/Router/invoice.router")
const ConnectDb = require("./Utils/db")

const PORT = process.env.PORT || 2000

const corsOptions = {
      origin: [
    "http://localhost:5173", 
  "https://billmate-invoice-generator-app.onrender.com"
  ],
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello From the root");
})

app.use("/api", router)
ConnectDb().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
});
