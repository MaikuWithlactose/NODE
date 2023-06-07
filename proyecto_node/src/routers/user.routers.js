const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/user.controller.js")

router.use((req, res, next) => {
    console.log('Petición recibida del cliente');
    next();
});  

router.get("/", usersCtrl.getStart );
// router.get("/usuario", usersCtrl.getUser);
// router.get("/usuario/:id", usersCtrl.getUserParams);
// router.post("/usuario", usersCtrl.postUser);
// router.put("/usuario", usersCtrl.putUser);
// router.delete("/usuario", usersCtrl.deleteUser);

module.exports = router; 