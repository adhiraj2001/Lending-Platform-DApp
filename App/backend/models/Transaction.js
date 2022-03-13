const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TransactionSchema = new Schema({
	lender_email: {
		type: String,
		required: true
	},
	borrower_email: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		default: "Borrowed"
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Transaction = mongoose.model("transaction", TransactionSchema);