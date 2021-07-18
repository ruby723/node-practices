const models = require("../models");
const {Op,Sequelize} = require("sequelize");

module.exports = {
    create: async function(req, res, next) {
        // sql insert
        const results = await models.Guestbook.create({
            no: null,
            name: req.body.name,
            password: req.body.password,
            regDate: new Date(),
            message: req.body.message
        })
        res.status(200).send({
            result: 'success',
            data: results,
            message: null
        });
    },
    read: async function(req, res, next) {
        const startNo = req.query.no || 0;
        // sql: select.... limit
        const results = await models.Guestbook.findAll({
            attributes: ["no", "name","message","regdate"],
            where: (startNo>0) ? {no:{[Op.lt]:startNo}} : {},
            order: [["no","desc"]],
            limit:5,

        })
        res.status(200).send({
            result: 'success',
            data:results,
            message: null
        });

    },
    delete: async function(req, res, next) {
        console.log(req.params.no + ":" + req.body.password);
        // sql delete
        const results = await models.Guestbook.destroy({
            where: {
              no: req.body.no,
              password: req.body.password,
            }
        })
        res.status(200).send({
            result: 'success',
            data: results,
            message: null
        });
    }
} 