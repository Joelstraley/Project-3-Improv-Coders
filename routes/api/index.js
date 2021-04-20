const router = require("express").Router();
const showRoutes = require("./shows");
const userRoutes = require("./users");

// Book routes
router.use("/shows", showRoutes);
router.use("/users", userRoutes);

module.exports = router;
