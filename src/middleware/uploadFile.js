//Function to check the file type

const multer = require(`multer`);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "pictures");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + `-` + file.originalname);
    }
});

const uploadFile = multer({
    storage: storage
});

module.exports = {uploadFile: uploadFile}