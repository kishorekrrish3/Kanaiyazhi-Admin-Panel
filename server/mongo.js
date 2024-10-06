const mongoose=require('mongoose');

require('dotenv').config();

mongoose.connect("mongodb+srv://aatmkanaiyali:ramana123@kanaiyali.ziyps.mongodb.net/?retryWrites=true&w=majority&appName=Kanaiyali").then(()=>{
    console.log('database connected...');
}).catch((err)=>{
    console.log(err)
})

const eventSchema=new mongoose.Schema({
    title: String,
    subtitle: String,
    authorName: String,
    date: String,
    content: String,
    addedPhotos: [String],
})

const oviyamSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    date: String,
    authorName: String,
    content: String,
    addedPhotos: [String],
})

const eventModel=mongoose.model("event",eventSchema);
const oviyamModel = mongoose.model("oviyam", oviyamSchema);

module.exports = { eventModel, oviyamModel };