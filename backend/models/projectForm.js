const { Schema, model } = require("mongoose");

const portfolioFormSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  link: { type: String, required: false },
});

module.exports = model("Form", portfolioFormSchema);
