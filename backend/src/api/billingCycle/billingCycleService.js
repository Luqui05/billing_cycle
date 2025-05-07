const express = require("express");
const BillingCycle = require("./billingCycle");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const billingCycles = await BillingCycle.find();
        res.json(billingCycles);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const billingCycle = new BillingCycle(req.body);
        await billingCycle.save();
        res.status(201).json(billingCycle);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const billingCycle = await BillingCycle.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json(billingCycle);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await BillingCycle.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
