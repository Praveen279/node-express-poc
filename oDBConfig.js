const ODatabase = require('orientjs').ODatabase;
const db = new ODatabase({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'password',
    name: 'Connection-pool'
});

db.open().then(() => console.log('db is open to query'))

module.exports = {
    db
}
