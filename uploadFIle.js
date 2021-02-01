const multer = require("multer")

exports.storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'public/images')
    },
    filename : (req,file,cb) => {
        cb(null,`${req.user._id}`+file.originalname);
    }
})

exports.imageFileFilter = (req,file,cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error("You can only upload images"), false);
    }
    cb(null, true);
}

exports.defaultImage = 'default_profile.png'