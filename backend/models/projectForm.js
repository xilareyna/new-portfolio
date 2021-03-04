const { Schema, model } = require("mongoose");

const portfolioFormSchema = Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  link: { type: String, required: false },
});

module.exports = model("Form", portfolioFormSchema);
