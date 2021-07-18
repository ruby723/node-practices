const models = require("../models");
const {Op,Sequelize} = require("sequelize");

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
        const startNo = req.query.no || 0;
        console.log(startNo);
        // sql: select.... limit
        const results = await models.Guestbook.findAll({
            attributes: ["no", "name","message","regdate"],
            where: (startNo>0) ? {no:{[Op.lt]:startNo}} : {},
            order: [["no","desc"]],
            limit:5,

        })
        console.log(results);
        res.status(200).send({
            result: 'success',
            data:results,
            message: null
        });

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