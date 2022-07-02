const image_controller = require("../controllers/image");
const multer = require("multer");
const path = require("path");
const router = require('express').Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/xampp/htdocs/images")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: '1000000'},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Invalid Filetype!!!')
    }
}).single("file")


router.post("/:id/upload",upload,image_controller.upload);
router.get("/allPost/:id",image_controller.allPost);



module.exports = router