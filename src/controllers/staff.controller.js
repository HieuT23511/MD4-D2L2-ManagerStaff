const StaffModel = require('../models/staff.model')

class StaffController {
    static async getHomePage(req, res) {
        let listStaff = await StaffModel.getAllStaff().catch(err => console.log(err.message));
        // console.log(listStaff);
        res.render('home', {staffs: listStaff});
    }

    static getAddStaffPage(req, res) {
        res.render('add');
    }

    static async addStaff(req, res) {
        let {name, age, department, wages} = req.body;
        console.log(req.body)
        await StaffModel.addStaff(name, age, department, wages).catch(err => console.log(err.message));
        res.redirect(301, '/')
    }

    static async deleteStaff(req, res) {
        let id = req.query.id;
        if (id) {
            await StaffModel.deleteStaff(id).catch(err => console.log(err.message));
        }
        res.redirect(301, '/');
    }

    static async getUpdateStaffPage(req, res) {
        let id = req.query.id;
        if (id) {
            let dataStaff = await StaffModel.getInfoStaff(id).catch(err => console.log(err.message));
            // console.log(dataStaff);
            res.render('update', {staff: dataStaff[0]});
        } else {
            res.redirect(301, '/')
        }
    }
    static async updateStaff(req,res){
        let id = req.query.id;
        if (id) {
            let {name,age,department,wages} = req.body;
            await StaffModel.updateStaff(id,name,age,department,wages).catch(err=>console.log(err.message));
        }
        res.redirect(301,'/');
    }
    static async homePaging(req,res){
        let limit = 2;
        let page = req.query.page ? +req.query.page : 1;
        let arrayStaff = await StaffModel.countStaffs().catch(err=>console.log(err));
        // console.log(totalStaff);
        let totalStaff = arrayStaff[0].totalStaff;
        let totalPage = Math.ceil(totalStaff/ limit)
        let offset = (page - 1) * limit;
        let data = await StaffModel.homePaging(limit,offset).catch(err=>console.log(err))
        res.render('home',{staffs:data,totalPage:totalPage,currentPage:page})
    }
}

module.exports = StaffController;