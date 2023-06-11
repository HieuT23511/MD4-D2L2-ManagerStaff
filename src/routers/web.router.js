const express = require ('express');
const StaffController = require('../controllers/staff.controller')
const router = express.Router();

router.get('/',StaffController.homePaging);
router.get('/add',StaffController.getAddStaffPage);
router.post('/add',StaffController.addStaff);
router.get('/delete',StaffController.deleteStaff);
router.get('/update',StaffController.getUpdateStaffPage);
router.post('/update',StaffController.updateStaff);


module.exports = router;
