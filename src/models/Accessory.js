const mongoose = require(`mongoose`);

const accessorySchema = new mongoose.Schema({
    name: String,
    desctription : String, 
    imageUrl: String,
});


const Accessory = mongoose.model(`Accessory` , accessorySchema);

module.exports = Accessory