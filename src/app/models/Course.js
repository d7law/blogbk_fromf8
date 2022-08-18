const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: String,
        description: String,
        image: String,
        slug: { type: String, slug: 'name', unique: true },
        videoId: String,
    },
    {
        timestamps: true,
    },
);

//Add plugin for model
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
