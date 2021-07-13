const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').get(controller.index);
router.route('/add').get(controller.form);
router.route('/add').post(controller.add);
router.route('/delete').get(controller.password);
router.route('/delete').post(controller.delete);


module.exports = router;
