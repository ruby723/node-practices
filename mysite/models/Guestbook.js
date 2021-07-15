const {Sequelize,DataType, DataTypes} = require('sequelize');

module.exports = function(sequelize){

    return sequelize.define('User',{
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
        passowrd: {
            field : 'password',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        message: {
            field:'email',
            type: DataTypes.TEXT,
            allowNull : false
        },
        regdate: {
            field:'regdate',
            type:DataTypes.DATE,
            defaultValue: Sequelize.fn("now"),
            allowNull : false
        }
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'guestbook'
    });
}