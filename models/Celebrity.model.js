//  Add your code here
const { Schema, model } = require("mongoose");

const Celebrity = new Schema({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  catchPhrase: { type: String },
});

const Celebrity_model = model("Celebrities_mod", Celebrity);
module.exports = Celebrity_model