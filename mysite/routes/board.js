const express = require('express');
const controller = require('../controllers/board');

const router = express.Router();
router.route('').get(controller.list);
router.route('/view/:no').get(controller.view);
router.route('/write').get(controller.write);
router.route('/add').post(controller.add);
router.route('/modify/:no').get(controller.modify);
router.route('/modify').post(controller._modify);
// router.route('/comment/:no').get(controller.comment);
// router.route('/comment').post(controller._comment);
router.route('/delete').get(controller.delete);

module.exports = router;