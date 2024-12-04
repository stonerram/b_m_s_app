const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moment = require('moment'); 
const cron = require('node-cron');


const movieRoutes= require('./routes/moviesRoutes');
const liveEventsRoutes = require('./routes/liveEventRoutes');
const premieresRoutes = require('./routes/premirersRoutes');
const musicStudioRoutes = require('./routes/musicStudioRoutes');
const outDoorEventsRoutes = require('./routes/outDoorEventsRoutes');
const laughterTherapyRoutes = require('./routes/laughterTherapyRoutes');
const papularEventsRoutes = require('./routes/papularEventsRoutes');
const latestPlayRoutes = require('./routes/latestPlayRoutes');
const sportsWayRoutes = require('./routes/sportsWayRoutes');
const trendingRoutes = require('./routes/trendingRoutes');




const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', movieRoutes);
app.use('/api', liveEventsRoutes);
app.use('/api', premieresRoutes);
app.use('/api', musicStudioRoutes);
app.use('/api', outDoorEventsRoutes);
app.use('/api', laughterTherapyRoutes);
app.use('/api', papularEventsRoutes);
app.use('/api', latestPlayRoutes);
app.use('/api', sportsWayRoutes);
app .use('/api', trendingRoutes);


const mongoURI = "mongodb+srv://stonerram488:114u181m@cluster0.fo9otxm.mongodb.net/bmsa?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Buddy...!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


  

const adSchema = new mongoose.Schema({
  adsposter: String, 
  createdAt: { type: Date, default: Date.now } });

const Advertisement = mongoose.model('Advertisement', adSchema);

app.get("/api/ads", async (req, res) => {
  try {
    const ads = await Advertisement.find(); 
    res.json(ads);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch advertisements" });
  }
});

app.post("/api/ads", async (req, res) => {
  try {
    const { adsposter } = req.body;

    const newAd = new Advertisement({
      adsposter, 
    });

    await newAd.save();
    res.status(201).json(newAd);
  } catch (err) {
    res.status(500).json({ error: "Failed to add advertisement" });
  }
});

const deleteAdData = async (dateToDelete) => {
  try {
    const istDate = moment(dateToDelete).tz('Asia/Kolkata').startOf('day'); 
    console.log(`Deleting ads created before: ${istDate.format('YYYY-MM-DD HH:mm:ss')}`);

    const result = await Advertisement.deleteMany({ createdAt: { $lt: istDate.toDate() } });

    if (result.deletedCount > 0) {
      console.log(`${result.deletedCount} advertisements deleted successfully!`);
    } else {
      console.log('No advertisements found to delete.');
    }
  } catch (error) {
    console.error('Error deleting advertisement data:', error);
  }
};

app.get('/delete-ads', async (req, res) => {
  const dateToDelete = '2024-12-01T00:00:00'; 
  await deleteAdData(dateToDelete); 
  res.send('Advertisement data deletion process completed.');
});

cron.schedule('0 0 * * *', async () => {
  const dateToDelete = moment().tz('Asia/Kolkata').subtract(1, 'days').format('YYYY-MM-DDT00:00:00'); 
  await deleteAdData(dateToDelete); 
  console.log('Scheduled advertisement data deletion completed.');
});




const PORT = 1141;
app.listen(PORT, () => console.log(`Server running on Port No: ${PORT}`));
