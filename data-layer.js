const mongoose = require('mongoose');

const meetupModel = require('./models');

const addItemToDB = (data) => {
    console.log('Meetup Model Create Data', data);
    return meetupModel.create(data);
};

const getAllItemsFromDB = () => meetupModel.find();

module.exports = {
    addItemToDB,
    getAllItemsFromDB
};