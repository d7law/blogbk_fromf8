module.exports = {
    multipleMoongoseToObject: function (moongooses) {
        return moongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
