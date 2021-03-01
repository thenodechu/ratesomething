const mongoose = require("../libs/mongoose"),
  Schema = mongoose.Schema;

const schema = new Schema({
    linkOfImg: {
        type: String,
        required: true,
    },
    idOfUser: {
        type:Number
    },
    grade: {
        type:Number
    },
    numberOfGrades: {
        type:Number
    },
    description: {
        type:String
    },
    type: {
        type:String
    },
    index: {
        type: Number,
        required: true
    }
});

exports.Images = mongoose.model("Images", schema);
