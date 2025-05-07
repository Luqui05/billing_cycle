const express = require("express");
const billingCycleRoutes = require("../api/billingCycle/billingCycleService");

module.exports = function (server) {
    const router = express.Router();
    server.use("/api", router);

    router.use("/billingCycles", billingCycleRoutes);
};