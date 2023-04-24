const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://root:root@development-cluster-ptdz3.azure.mongodb.net/orcestra-new?retryWrites=true&w=majority';
mongoose.connect(connectionString);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.listen(5000, () => console.log('Server Started. Listening on 5000...'));