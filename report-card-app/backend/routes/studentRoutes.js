const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
