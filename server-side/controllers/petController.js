const Pet=require("../models/petModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
//Create a pet
exports.createPet=catchAsyncErrors(async(req,res,next)=>{
    
    console.log('Create pet',req.files);
    const {petname,
        image1,
        breed,
        gender,
        age,
        fullname,
        lastname,
        description,
        contact,
        localarea,
        city,
        states,
        species,
        todayDate}=req.body;

        
        Pet.findOne({fullname:fullname}, function(err,pet){
        
            if(pet){
            
                res.status(400).send({message: "fail"})
                
            }else{
                
                const pet=new Pet({

                    petname,
                    
                    breed,
                    gender,
                    age,
                    image1:req.files,
                    fullname,
                    lastname,
                    description,
                    contact,
                    localarea,
                    species,
                    city,
                    states,
                    todayDate
                })
                console.log('now going to save',pet)
                pet.save(function(err,result) {
                    console.log(result)
                    if(err) {
                        console.log('error while craeting')
                        res.send(err)
                        
                    } else {
                    console.log('pet successfully saved')
                        res.status(201).send({message: "pass"})
                    }
                })
            }
        })
});


//Get all pets
exports.getAllPets=catchAsyncErrors(async(req, res)=>{
    
        const pets=await Pet.find();
        res.status(200).json({
            success:true,
            pets
        });
   
});




exports.searchedPet= catchAsyncErrors(async(req,res,next)=>{
   
    console.log(req.query.searchItem)
    let data = await Pet.find({
        "$or":[
            {"petname":{$regex:req.query.searchItem}},
            {"breed":{$regex:req.query.searchItem}},
        ]
    })
     res.send(data)
});

//Get pet details
exports.getPetDetails=catchAsyncErrors(async(req, res, next)=>{
    let id =req.params.id;
    console.log(id);
    Pet.findById(id)
    .then(result=>{
        res.status(200).json({
            pet:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});

//Update a pet
exports.updatePet=catchAsyncErrors(async(req, res, next)=>{
    let pet=await Pet.findById(req.params.id);

    // if(!pet){
    //     console.log("entered if")
    //     return next(new ErrorHandler("Pet not foubd", 404));
    // }
    if(req.files[0]){
        console.log("entered if");
        var dataValues ={
            petname:req.body.petname,
                breed:req.body.breed,
                gender:req.body.gender,
                age:req.body.age,
                fullname:req.body.fullname,
                lastname:req.body.lastname,
                description:req.body.description,
                contact:req.body.contact,
               image1:req.files,
                localarea:req.body.localarea,
                city:req.body.city,
                states:req.body.states,
                species:req.body.species,
                todayDate:req.body.todayDate
        }
    }
    else{
        console.log("entered else");
        var dataValues ={
            petname:req.body.petname,
                breed:req.body.breed,
                gender:req.body.gender,
                age:req.body.age,
                fullname:req.body.fullname,
                lastname:req.body.lastname,
                description:req.body.description,
                contact:req.body.contact,
                localarea:req.body.localarea,
                city:req.body.city,
                states:req.body.states,
                species:req.body.species,
                todayDate:req.body.todayDate
        }
    }
   const updatedPet=await Pet.findByIdAndUpdate(req.params.id,dataValues, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    if(updatedPet){
        console.log(updatedPet);
        res.send(updatedPet);
        }
    
});

//Delete Pet
exports.deletePet=catchAsyncErrors(async(req, res, next)=>{
    await Pet.findByIdAndRemove(req.params.id).exec()
    res.send("itemdeleted")
});

/*exports.petParticularData=catchAsyncErrors(async(req, res, next)=>{
    const{petid}=req.body
    Pet.findOne({petid :petid},function(err,pet){
        if(petid===pet.petid){
        res.send({message:"found",pet:pet})
    }
    else{
        res.send({message:"not found"})
    }
    })
})
exports.petPostData=catchAsyncErrors(async(req, res, next)=>{
    console.log(req.body);
    const {petname,
        petid,
        breed,
        gender,
        age,
        images,
        fullname,
        lastname,
        description,
        contact,
        localarea}=req.body
    Pet.findOne({petid:petid}, function(err,pet){
        console.log("user came");
        if(pet){
            console.log("entered if")
            res.send({key: "failed"})
            
        } else{
            console.log("entered else")
            const pet=new Pet({
                petname,
                petid,
                breed,
                gender,
                age,
                images,
                fullname,
                lastname,
                description,
                contact,
                localarea
            })
            console.log(pet);
            pet.save(function(err,result) {
                if(err) {
                    res.send(err)
                    console.log(err)
                    console.log("error string")
                } else {
                    console.log(result);
                    res.send({ key: "pass"})
                }
            })
        }
    })
})
exports.petData=catchAsyncErrors(async(req, res, next)=>{
     const allPetData=Pet.find((err,pet)=>{
         console.log(pet);
         res.send(pet);
     }) 
     console.log(allPetData);
})*/
