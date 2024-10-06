const mongoose=require('mongoose');

require('dotenv').config();

mongoose.connect(/*put ur mongo url here*/).then(()=>{
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

const eventModel=mongoose.model('event',eventSchema);
const oviyamModel = mongoose.model('oviyam', oviyamSchema);

module.exports = { eventModel, oviyamModel };