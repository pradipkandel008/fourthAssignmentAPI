const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String
      // required: true
    },

    last_name: {
      type: String
      //required: true
    },
    user_name: {
      type: String
      //required: true
    },
    password: {
      type: String
      //required:true
    }
  },
  {
    timestamps: true
  }
);

const Users = mongoose.model("User", userSchema);
module.exports = Users;
