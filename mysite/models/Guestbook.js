const {Sequelize, DataTypes} = require('sequelize');

module.exports = function(sequelize){

    return sequelize.define('Guestbook',{
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            field : 'password',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        message: {
            
            type: DataTypes.TEXT,
            allowNull : false
        },
        regdate: {
            field:'regdate',
            type:DataTypes.DATE,
            // defaultValue: Sequelize.fn("now"),
            allowNull : false
        }
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: "regdate",
        updatedAt: false,
        tableName: 'guestbook'
    });
}