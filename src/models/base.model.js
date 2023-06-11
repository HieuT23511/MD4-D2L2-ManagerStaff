const database = require('./database')
const e = require("express");
class BaseModel{
    constructor() {
        this.connect = database.connectDB()
    }
    querySQL(sql){
        return new Promise((resolve, reject) => {
            this.connect.query(sql,(err,result)=>{
                if (err) return reject(err);
                return resolve(result);
            })
        })
    }
}

module.exports = new BaseModel();