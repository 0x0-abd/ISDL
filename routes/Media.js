const { uploadImage } = require("../controllers/mediaController")
const upload = require("../middleware/multer")

const router = require("express").Router();

router.post("/upload", upload.single('file'), uploadImage);

module.exports = router