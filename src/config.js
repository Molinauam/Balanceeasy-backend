const{config} = require('dotenv');
config();

module.exports={
//server.config
port:process.env.PORT || 3000,
//database.config
UserDB : process.env.UserDB,
passwordDB : process.env.passwordDB,
ServerDB : process.env.ServerDB,
DatabaseDB : process.env.Database, 
portDB: process.env.portDB, 
}