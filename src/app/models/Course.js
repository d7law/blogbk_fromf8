const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CourseSchema = new Schema(
    {
        _id: {type: Number},
        name: String,
        description: String,
        image: String,
        slug: { type: String, slug: 'name', unique: true },
        videoId: String,
    },
    {
        _id: false,
        timestamps: true,
    },
);

//Add plugin for model
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement, { inc_field: '_id' });
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseSchema);
