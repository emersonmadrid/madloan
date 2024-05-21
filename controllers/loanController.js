const Loan = require('../models/loan');

exports.getLoans = async (req, res) => {
    try {
        const loans = await Loan.find();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createLoan = async (req, res) => {
    const loan = new Loan({
        name: req.body.name,
        amount: req.body.amount,
    });

    try {
        const newLoan = await loan.save();
        res.status(201).json(newLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
