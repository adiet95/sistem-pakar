const router = require('express').Router()
const soalController = require('../Controllers/SoalController')
const testController = require('../Controllers/TestController')
const userController = require('../Controllers/UserController')
const adminController = require('../Controllers/AdminController')


router.get('/test', testController.addtest)
router.post('/test', testController.addPostTest)

router.get('/hasil', testController.showTest)
router.get('/hasil/:id/delete', testController.deleteTest)



router.get("/", userController.loginForm);
router.post("/", userController.login);
router.get("/register", userController.registerForm);
router.post("/register", userController.register);

router.get("/admin", adminController.adminForm);
router.post("/admin", adminController.adminLogin);
router.get("/admin/register", adminController.registerForm);
router.post("/admin/register", adminController.register);


// router.get('/:userId/soal', soalController.showSoal)

// router.get('/soal/tambahSoal', soalController.addSoal)
// router.post('/soal/tambahSoal', soalController.addPostSoal)


// router.get('/soal/:id/edit', soalController.editSoal)
// router.post('/soal/:id/edit', soalController.editSoal)

// router.get('/soal/:id/delete', soalController.deleteSoal)


module.exports = router