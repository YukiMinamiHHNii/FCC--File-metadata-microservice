const express = require("express"),
			router = express.Router(),
			fileAnalyseController = require("../controllers/fileAnalyseController");

router.post("/single", fileAnalyseController.single);
router.post("/multiple", fileAnalyseController.multiple);

module.exports = router;
