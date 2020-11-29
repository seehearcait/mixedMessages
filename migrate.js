const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('.database.sqlite');

db. serialize(() => {
    db.run ('DROP TABLE IF EXISTS Queens');

    db.run (`CREATE TABLE IF NOT EXISTS Queens (
        id INTEGER NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        PRIMARY KEY (id)
    )`);
})