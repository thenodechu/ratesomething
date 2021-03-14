const mongoose = require("../libs/mongoose"),
  Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type:String
    },
    password: {
        type:String
    },
    email: {
        type:String
    },
    date: {
        type:String
    }

});

exports.Users = mongoose.model("Users", schema);
