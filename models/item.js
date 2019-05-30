const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    item_name: {
      type: String
      // required: true
    },

    item_price: {
      type: String
      //required: true
    },
    item_description: {
      type: String
      //required: true
    },
    item_image: {
      type: String
      //required:true
    }
  },
  {
    timestamps: true
  }
);

const Items = mongoose.model("Item", itemSchema);
module.exports = Items;
