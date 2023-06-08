const {Router} = require ("express")
const router = Router();
const bookCtrl = require("../controller/book.controller.js")

router.use((req, res, next) => {
    console.log('Petición recibida del cliente : URL: "'+ req.url +'" -METHOD:"'+ req.method +'" -USER:"'+req.headers['user-agent']+'"');
    next();
});  

router.get("/books", bookCtrl.getBooks );
router.get("/books/:id", bookCtrl.getBookByID );
router.post("/books", bookCtrl.postBook );
router.put("/books", bookCtrl.putBook );
router.delete("/books", bookCtrl.deleteBook );

module.exports = router;