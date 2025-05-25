const express = require("express")
const router = express.Router();
const invoiceController = require("../Controllers/invoice")

router.route("/invoice").post(invoiceController.createInvoice);
router.route("/invoice").get(invoiceController.getAllInvoice);
router.route("/invoice/:id").get(invoiceController.getInvoiceById);
router.route("/invoice/:id").delete(invoiceController.deleteInvoice);
router.route("/invoice/:id").put(invoiceController.updateInvoice);

module.exports = router;