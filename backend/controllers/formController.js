const express = require("express");
const form = express.Router();
const Form = require("../models/projectForm.js");

//==============
// Create Route
//=============

form.post("/", async (req, res) => {
  try {
    const createdForm = await Form.create(req.body.form);
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json(error);
  }
});

//==============
// Index Route
//=============

form.get("/", async (req, res) => {
  try {
    const foundForm = await Form.find({});
    res.status(200).json(foundForm);
  } catch (error) {
    res.status(400).json(error);
  }
});

//==============
// Edit Route
//=============

form.get("/:id/edit", async (req, res) => {
  try {
    const foundForm = await Form.find({});
    res.status(200).json(foundForm);
  } catch (error) {
    res.status(400).json(error);
  }
});

//==============
// Delete Route
//=============

form.delete("/:id", async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedForm);
  } catch (error) {
    res.status(400).json(error);
  }
});

//==============
// Update Route
//=============

form.put("/:id", async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = form;
