const baseModel = require('./base.model');

class StaffModel {
    static async getAllStaff(){
        let sql = `SELECT * FROM Staffs`
        return await baseModel.querySQL(sql);
    }
    static async addStaff(name, age, department,wages){
        let sql = `insert into Staffs (name, age, department,wages)
        values ('${name}',${age},'${department}',${wages})`
        return await baseModel.querySQL(sql);
    }
    static async deleteStaff(id){
        let sql = `delete from Staffs where id = ${id}`
        return await baseModel.querySQL(sql);
    }
    static async getInfoStaff(id){
        let sql = `SELECT * FROM Staffs where id = ${id}`;
        return await baseModel.querySQL(sql);
    }
    static async updateStaff(id,name, age, department,wages){
        let sql = `
        update Staffs
        set name = '${name}',
        age= ${age},
        department = '${department}',
        wages = ${wages}
        where id = ${id}
        `;
        return await baseModel.querySQL(sql);
    }
    static async homePaging(limit,offset){
        let sql = `SELECT * FROM Staffs
        LIMIT ${limit}
        OFFSET ${offset}`
        return await baseModel.querySQL(sql);
    }
    static async countStaffs(){
        let sql = `select count(id) as totalStaff from Staffs`
        return await baseModel.querySQL(sql);
    }
}

module.exports = StaffModel;