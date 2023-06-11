const mysql = require('mysql')
class Database {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.password = 'S300pmu1';
        this.database = 'ManagerStaff';
    }
    connectDB(){
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })
    }
}

module.exports = new Database();