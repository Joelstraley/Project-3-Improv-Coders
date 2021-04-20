const router = require("express").Router();
const showController = require("../../controllers/showsController");

// Matches with "/api/shows"
router.route("/")
  .get(showController.findAll)  
  .post(showController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(showController.findById)
  .put(showController.update)
  .delete(showController.remove);

module.exports = router;
