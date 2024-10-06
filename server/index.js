const express = require('express');
const cors = require('cors');
const app = express();
const { eventModel, oviyamModel } = require('./mongo');
const imgdown = require('image-downloader');
const multer = require('multer');
const fs = require('fs');

app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.get("/", (req, res) => {
  res.send("hi da");
});

app.post("/events1", async (req, res) => {
  const { title, subtitle, date, authorName, content, addedPhotos } = req.body;
  console.log({ title, subtitle, date, authorName, content, addedPhotos });     
  const eveDoc = await eventModel.create({
    title, subtitle, date, authorName, content, addedPhotos
  });
  res.send(eveDoc);
});

app.post("/oviyam", async (req, res) => {
  const { title, subtitle, date, authorName, content, addedPhotos } = req.body;
  const eveDoc = await oviyamModel.create({
    title, subtitle, date, authorName, content, addedPhotos
  });
  res.send(eveDoc);
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const validUrl = new URL(link);
  const newName = "photo" + Date.now() + ".jpg";
  await imgdown.image({
    url: validUrl.href,
    dest: __dirname + '/uploads/' + newName
  });
  res.json(newName);
});

const upload = multer({ dest: 'uploads/' });

app.post("/uploads", upload.array('photo', 100),async(req, res) => {
  const upfiles = [];
  req.files.forEach(file => {
    const { path, originalname } = file;
    const orgparts = originalname.split(".");
    const ext = orgparts[orgparts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    upfiles.push(newPath.replace("uploads\\", ""));
  });
  res.json(upfiles);
});

app.listen(5000, () => {
  console.log("server is listening...");
});

