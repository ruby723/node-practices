const {Sequelize,DataType, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
);

const User = require('./User')(sequelize);

User.sync({
    force: process.env.TABLE_CREATE_ALWAYS ==='true', // 기존의 테이블을 drop시키고 데이터를 새로만든다.
    alter: process.env.TABLE_ALTER_SYNCtrue === 'true' // data값이 변경되면 alter 사용

});

module.exports = {User}