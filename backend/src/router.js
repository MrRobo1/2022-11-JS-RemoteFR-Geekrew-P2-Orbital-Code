const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const planetControllers = require("./controllers/planetControllers");

const rocketControllers = require("./controllers/rocketControllers");
const tripControllers = require("./controllers/tripControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/planets", planetControllers.browse);
router.get("/rockets", rocketControllers.browse);
router.get("/trips", tripControllers.browse);
router.post("/trips", tripControllers.create);

module.exports = router;
