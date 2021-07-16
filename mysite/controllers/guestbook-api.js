const models = require("../models");
const Sequelize = require("sequelize");

module.exports = {
    create: async function(req, res, next) {
        console.log(req.body);
        // sql insert
        res.status(200).send({
            result: 'success',
            data: Object.assign(req.body, {
                no: 10,
                password: '',
                regDate: new Date()
            }),
            message: null
        });
    },
    read: async function(req, res, next) {
        const startNo = req.query.sno || 0;
        console.log(startNo);
        // sql: select.... limit
        res.status(200).send({
            result: 'success',
            data:[{
                no: 9,
                name: '둘리',
                message: '호이~',
                regDate: new Date()
            }],
            message: null
        });

        res.render("api/guestbook/spa-landing")
    },
    delete: function(req, res, next) {
        console.log(req.params.no + ":" + req.body.password);
        // sql delete
        res.status(200).send({
            result: 'success',
            data: req.params.no,
            message: null
        });
    }
} 