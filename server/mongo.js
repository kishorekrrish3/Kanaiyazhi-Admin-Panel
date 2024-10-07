const mongoose=require('mongoose');

require('dotenv').config();

<<<<<<< HEAD
mongoose.connect("mongodb://localhost:27017").then(()=>{
=======
mongoose.connect(/*put ur mongo url here*/).then(()=>{
>>>>>>> 43fe20eb7f4ee79321025c56b9579f0e12b0278d
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
    photos: [String],
})

const oviyamSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    date: String,
    authorName: String,
    content: String,
    photos: [String],
})

<<<<<<< HEAD
const sirukadhaiSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    date: String,
    authorName: String,
    content: String,
    photos: [String],
})
=======
const eventModel=mongoose.model('event',eventSchema);
const oviyamModel = mongoose.model('oviyam', oviyamSchema);
>>>>>>> 43fe20eb7f4ee79321025c56b9579f0e12b0278d

const puthagamSchema=new mongoose.Schema({
    title: String,
    subtitle: String,
    authorName: String,
    date: String,
    content: String,
    photos: [String],
})

const vasanamSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    date: String,
    authorName: String,
    content: String,
    photos: [String],
})

const vidukadhaiSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    date: String,
    authorName: String,
    content: String,
    photos: [String],
})

const naatkurippuSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    date: String,
    authorName: String,
    content: String,
    photos: [String],
})

const eventModel=mongoose.model('kavithai',eventSchema);
const oviyamModel = mongoose.model('oviyam', oviyamSchema);
const sirukadhaiModel = mongoose.model('sirukadhai', sirukadhaiSchema);
const puthagamModel = mongoose.model('puthagam', puthagamSchema);
const vasanamModel = mongoose.model('vasanam', vasanamSchema);
const vidukadhaiModel = mongoose.model('vidukadhai', vidukadhaiSchema);
const naatkurippuModel = mongoose.model('naatkurippu', naatkurippuSchema);

module.exports = { eventModel, oviyamModel, sirukadhaiModel, puthagamModel, vasanamModel, vidukadhaiModel, naatkurippuModel};