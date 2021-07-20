const {Sequelize, DataTypes} = require('sequelize');

module.exports = function(sequelize){

    return sequelize.define('Board',{
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        contents: {
            field : 'contents',
            type: DataTypes.TEXT,
            allowNull: false
        },
        regdate: {
            field:'reg_date',
            type:DataTypes.DATE,
            allowNull : false,
            defaultValue: Sequelize.NOW
        },
        hit: {
            field : 'hit',
            type: DataTypes.INTEGER,
            defaultValue:0,
            allowNull: true
        },
        groupno: {
            field : 'group_no',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        orderno: {
            field : 'order_no',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        depth: {
            field : 'dept',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        userno: {
            field : 'user_no',
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: "regdate",
        updatedAt: false,
        tableName: 'board'
    });
}