const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {
    Schema,
} = mongoose;

const mealSchema = new Schema({
    item: String,
    contactInfo: String,
    location: String,
    date: String,
    time: String,
    //  userID: mongoose.Schema.Types.ObjectId,
});

const meetupModel = mongoose.model('Meetup Model', mealSchema);

module.exports = {
    meetupModel,
};