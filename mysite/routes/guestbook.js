const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('/guestbook').get(controller.index);
router.route('/guestbook/add').post(controller.add);
router.route('/guestbook/delete/:no').get(controller.password);
router.route('/guestbook/delete/:no').post(controller.delete);

module.exports = router;