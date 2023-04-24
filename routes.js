const express = require('express');
const routes = express.Router();
const DataObject = require('./models');

const axios = require('axios');

routes.get('/api/psets', async (req, res) => {
    try {
        const config = {
            method: 'get',
            url: 'https://www.orcestra.ca/api/psets/canonical',
            headers: { }
        }
        const response = await axios(config);
        const psets = response.data;
        res.json(psets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

routes.get('/api/pset-database', async (req, res) => {
    try {
        const dataObjects = await DataObject.find();
        res.send(dataObjects);
    } catch (error) {
        console.error(error);
        res.status(500).jsonj({ message: error.message});
    }
})

module.exports = routes;