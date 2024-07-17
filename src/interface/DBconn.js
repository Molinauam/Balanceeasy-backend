const mysql = require('mysql2/promise');
const config = require('../config.js');
const { createPool } = require('mysql2');

const dbauth = {
    UserDB : config.UserDB,
    passwordDB : config.passwordDB,
    ServerDB : config.ServerDB,
    Database : config.Database, 
    portDB: config.portDB, 
    waitForconections: true,
    connectionlimit: 10,
    queueLimit: 0
};
async function getconnection(){
    return await mysql.createPool(dbauth);
    return createPool;
}

module.exports = getconnection;