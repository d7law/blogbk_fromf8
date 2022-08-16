const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    slug: { type: String, slug: 'name', unique: true },
    videoId: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);