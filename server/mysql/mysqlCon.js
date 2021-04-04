let mysql = require('mysql');

const user_con = mysql.createConnection({
    host: '115.28.209.150',
    user: 'root',
    password: '123456',
    database: 'user'
});

class HandleUser {
    constructor() {
        user_con.connect();
    }
    insert (data) {
        // let {name, password, email} = data;
        user_con.query("INSERT INTO user_list SET ?", data, (error, result, fields) => {
            if (error) throw error;
            console.log(result);
            console.log(fields);
        })
    }
}

