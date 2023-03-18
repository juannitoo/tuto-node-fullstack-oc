const express = require('express');
const mongoose = require('mongoose')
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://juannitoo:xxxxxxx@cluster-tuto-oc.ewqkpnr.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test' })
  .then(() => console.log('Connexion à MongoDB Atlas réussie, state : ', mongoose.connection.readyState))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  // state connection mongo
  // 0: disconnected
  // 1: connected
  // 2: connecting
  // 3: disconnecting

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;
