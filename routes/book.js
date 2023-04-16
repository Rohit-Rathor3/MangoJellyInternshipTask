const router = require("express").Router();
const bookController = require("../controllers/bookController");
router.post("/",bookController.add_book);
router.get("/",bookController.get_all_book);
router.get("/:bookId",bookController.get_single_book);
router.put("/:bookId");
router.delete("/:bookId");

module.exports = router;