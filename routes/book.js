const router = require("express").Router();
const bookController = require("../controllers/bookController");
router.post("/",bookController.add_book);  // to add new book
router.get("/",bookController.get_all_book); // to get all books
router.get("/:bookId",bookController.get_single_book); // to sigle book by id
router.put("/:bookId",bookController.update_book);    // to update book by id
router.delete("/:bookId",bookController.delete_book); // to delet book by id

module.exports = router;