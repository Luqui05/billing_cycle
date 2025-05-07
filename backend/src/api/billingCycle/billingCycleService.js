const express = require("express");
const BillingCycle = require("./billingCycle");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const billingCycles = await BillingCycle.find();
        res.json(billingCycles);
    } catch (err) {
        res.status(500).json({ errors: [err] });
    }
});

router.get("/count", async (req, res) => {
    try {
        const value = await BillingCycle.countDocuments();
        res.status(200).json({ value });
    } catch (error) {
        res.status(500).json({ errors: [error] });
    }
});

router.get("/summary", async (req, res) => {
    try {
        const result = await BillingCycle.aggregate([
            {
                $project: {
                    credit: { $sum: "$credits.value" },
                    debt: { $sum: "$debts.value" },
                },
            },
            {
                $group: {
                    _id: null,
                    credit: { $sum: "$credit" },
                    debt: { $sum: "$debt" },
                },
            },
            {
                $project: { _id: 0, credit: 1, debt: 1 },
            },
        ]);
        res.status(200).json(result[0] || { credit: 0, debt: 0 });
    } catch (error) {
        res.status(500).json({ errors: [error] });
    }
});

router.post("/", async (req, res) => {
    try {
        const billingCycle = new BillingCycle(req.body);
        await billingCycle.save();
        res.status(201).json(billingCycle);
    } catch (err) {
        res.status(400).json({ errors: [err] });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const billingCycle = await BillingCycle.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        res.json(billingCycle);
    } catch (err) {
        res.status(400).json({ errors: [err] });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await BillingCycle.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ errors: [err] });
    }
});

module.exports = router;
