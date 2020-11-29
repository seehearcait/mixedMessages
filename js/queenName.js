const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('.database.sqlite');

const listLength = (table) => {
    sql = `SELECT COUNT(*) AS count FROM ${table}`
    db.get(sql, function(error, row) {
        if (error) {
            console.log(error);
            return
        } else {
            return row
        }
    })
}

const getFirstName = () => {
    console.log('Hello World');
}

console.log(listLength('Queens'));