const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
  venderName: {
    type: String,
    required: true,
  },
  venderAddress: {
    type: String,
    required: true,
  },
  venderCity: {
    type: String,
    required: true,
  },
  venderCode: {
    type: String,
    required: true,
  },

  CustomerName: {
    type: String,
    required: true,
  },
  CustomerEmail: {
    type: String,
    required: true,
  },
  CustomerAddress: {
    type: String,
    required: true,
  },
  CustomerCity: {
    type: String,
    required: true,
  },
  CustomerCode: {
    type: String,
    required: true,
  },

  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },

  projectDes: {
    type: String,
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
