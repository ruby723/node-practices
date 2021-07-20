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
const Guestbook = require('./Guestbook')(sequelize);
const Gallery = require('./Gallery')(sequelize);
// const Site = require('./Site')(sequelize);
const Board = require('./Board')(sequelize);

User.hasMany(Board,{
    foreignKey: {
        name: 'userno',
        field: 'user_no',
        allowNull: false,
        constraints: true,
        onDelete: 'CASCADE'
    }
});
Board.belongsTo(User,{
    foreignKey:'userno'
});

User.sync({
    force: process.env.TABLE_CREATE_ALWAYS ==='true', // 기존의 테이블을 drop시키고 데이터를 새로만든다.
    alter: process.env.TABLE_ALTER_SYNC === 'true' // data값이 변경되면 alter 사용

});

Guestbook.sync({
    force: process.env.TABLE_CREATE_ALWAYS ==='true', // 기존의 테이블을 drop시키고 데이터를 새로만든다.
    alter: process.env.TABLE_ALTER_SYNC === 'true' // data값이 변경되면 alter 사용
})

Gallery.sync({
    force: process.env.TABLE_CREATE_ALWAYS ==='true', // 기존의 테이블을 drop시키고 데이터를 새로만든다.
    alter: process.env.TABLE_ALTER_SYNC === 'true' // data값이 변경되면 alter 사용
})

// Site.sync({
//     force: process.env.TABLE_CREATE_ALWAYS ==='true', // 기존의 테이블을 drop시키고 데이터를 새로만든다.
//     alter: process.env.TABLE_ALTER_SYNC === 'true' // data값이 변경되면 alter 사용
// })

Board.sync({
    force: process.env.TABLE_CREATE_ALWAYS ==='true', // 기존의 테이블을 drop시키고 데이터를 새로만든다.
    alter: process.env.TABLE_ALTER_SYNC === 'true' // data값이 변경되면 alter 사용
})

module.exports = {User, Guestbook, Gallery, /*Site, */Board}