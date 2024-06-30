const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  const { userId, description, amount, date
