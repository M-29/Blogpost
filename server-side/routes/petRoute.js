const express=require("express");

const multer=require("multer");
const { getAllPets, createPet, updatePet, deletePet, getPetDetails,searchedPet  } = require("../controllers/petController");

const router=express.Router();

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads');
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})

// const upload = multer({storage: storage}).fields([{name:'image1'},{name:'image2'}]);
const upload = multer({storage: storage})

router.route("/petData").get(getAllPets);
router.route("/petPostData").post( upload.array("image1", 3), createPet );
router.route("/petPostData/:id").post(getPetDetails);
router.route("/petPostData/:id").patch(upload.array("image1", 3),updatePet);
router.route("/petPostData/:id").delete(deletePet);
router.route("/searchedPet").get(searchedPet);

//router.route("/petParticularData").post(petParticularData);
//router.route("/petPostData").post(petPostData);
//router.route("/petData").get(petData);






module.exports=router