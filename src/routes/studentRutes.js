// src/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Routes pour les étudiants
router.post('/', studentController.createStudent);
router.get('/:id', studentController.getStudent);
router.get('/:id/courses', studentController.getStudentCourses);

module.exports = router;