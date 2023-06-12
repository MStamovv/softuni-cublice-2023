const router = require(`express`).Router();
const accessoryManager = require(`../managers/accessoryManager`);


router.get(`/create`, (req,res) =>{
    res.render(`accesory/create`);
});

router.post(`/create` , async (req , res)  =>{
    const {name , description , imageUrl} = req.body;
    
   //TODO add accessory data to db
   await accessoryManager.create({name , description , imageUrl});


    res.redirect(`/`);
});

module.exports= router;