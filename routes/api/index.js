const router = require("express").Router();
const showRoutes = require("./shows");
const userRoutes = require("./users");
// const secureRoutes = require("./secure-routes");

// Book routes
router.use("/shows", showRoutes);
router.use("/users", userRoutes);
// router.use("/secureRoutes", secureRoutes);

module.exports = router;
