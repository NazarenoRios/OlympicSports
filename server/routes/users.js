const express = require ("express");
const router = express.Router(); 

const {validateAuth} = require("../middleware/auth");

const { register, login, validation, logout} = require("../controllers/auth");
const { profile, changePassword, users, user, admin, darNewAdmin } = require("../controllers/users");

router.put("/admin/:id", validateAuth, admin)

router.post("/register", register) 

router.post("/login", login); 

router.get("/me",validateAuth, validation) 

router.post("/logout",validateAuth, logout) 

router.put("/profile/:id",validateAuth, profile)

router.put("/changePassword",validateAuth,changePassword)

router.get("/",validateAuth,users)

router.get("/user/:id",validateAuth, user)

router.put("/darNewAdmin/:id", validateAuth, darNewAdmin)

// preguntar el de eliminar o seria cambiar de adm a usuario comun

module.exports = router;


