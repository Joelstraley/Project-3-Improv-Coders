const router = require("express").Router();
const showController = require("../../controllers/usersController");

// Matches with "/api/shows"
router.route("/users")
  .get(showController.findAll)  
  .post(showController.create);

// Matches with "/api/books/:id"
router
  .route("/users/:id")
  .get(showController.findById)
  .put(showController.update)
  .delete(showController.remove);

module.exports = router;