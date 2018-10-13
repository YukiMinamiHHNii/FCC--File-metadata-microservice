const multer = require("multer");

const singleUpload = multer().single("upfile"),
	multipleUpload = multer().array("upfiles", 5);

exports.single = (req, res) => {
	singleUpload(req, res, err => {
		if (err) {
			return res.json({ error: "Error while uploading file" });
		} else {
			return res.json({
				name: req.file.originalname,
				type: req.file.mimetype,
				size: req.file.size
			});
		}
	});
};

exports.multiple = (req, res) => {
	multipleUpload(req, res, err => {
		if (err) {
			res.json({ error: "Error while uploading files... file limit exceeded?" });
		} else {
			let result = req.files.map((item, index) => {
				return {
					name: item.originalname,
					type: item.mimetype,
					size: item.size
				};
			});
			res.json({ files: result });
		}
	});
};
