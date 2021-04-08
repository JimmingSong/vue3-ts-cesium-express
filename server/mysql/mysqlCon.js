let mysql = require('mysql');

const user_con = mysql.createPool({
    connectionLimit: 10,
    host: '115.28.209.150',
    user: 'root',
    password: '123456',
    database: 'user'
});

class HandleUser {
    constructor() {
        // user_con.connect();
    }
    insert (data) {
        // let {name, password, email} = data;
        return new Promise(async (resolve, reject) => {
            let res = await this.find(data.name, data.password);
            if (res.result && res.result.length) {
                return {success: false, msg: '用户已存在'}
            }
            user_con.query("INSERT INTO user_list SET ?", data, (error, result, fields) => {
                if (error) {
                    reject(error)
                }
                resolve({success: true, result, fields});
            })
        })
    }
    update (id, data) {
        user_con.query('UPDATE user_list SET password = ? WHERE id = ?', [data.password, id], function (error, result, fields) {
            if (error) throw error;
            console.log(result);
            console.log(fields);
        })
    }
    remote () {}
    find (name, password) {
        return new Promise((resolve, reject) => {
            user_con.query('SELECT id FROM user_list WHERE name = ? AND password = ?', [name, password], function (error, result, fields) {
                if (error) {
                    reject(error);
                }
                resolve({result, fields});
            })
        })

    }
}

module.exports = {
    HandleUser,
    user_con
}
