const {Router} = require ("express")
const router = Router();
const bookCtrl = require("../controller/book.controller.js")

router.use((req, res, next) => {
    console.log('Petición recibida del cliente : URL: "'+ req.url +'" -METHOD:"'+ req.method +'" -USER:"'+req.headers['user-agent']+'"');
    next();
});  

router.get("/book", bookCtrl.getBook );
router.post("/book", bookCtrl.postBook );
router.put("/book", bookCtrl.putBook );
router.delete("/book", bookCtrl.deleteBook );

module.exports = router;