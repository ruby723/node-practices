const models = require("../models");
const Sequelize = require("sequelize");
module.exports = {
  index: async function (req, res, next) {
    try {
      const results = await models.Guestbook.findAll({
        attributes: ["no","name","message",
          [
            Sequelize.fn(
              "date_format",
              Sequelize.col("regdate"),
              "%Y/%m/%d %H:%i:%s"
            ),
            "regdate",
          ],
        ],
        order: Sequelize.literal("regdate DESC"),
      });
      res.render("guestbook/index", { list: results || [] });
    } catch (err) {
      next(err);
    }
  },
  delete: function (req, res) {
    res.render("guestbook/delete");
  },
  _delete: async function (req, res, next) {
    try {
      await models.Guestbook.destroy({
        where: {
          no: req.body.no,
          password: req.body.password,
        },
      });
      res.redirect("/guestbook")
    } catch (err) {
      next(err);
    }
  },
  add: async function (req, res, next) {
    try {
      console.log(req.body);
      await models.Guestbook.create(req.body);
      res.redirect("/guestbook");
    } catch (err) {
      next(err);
    }
  },
  spalist: async function(req,res,next){

    res.render("guestbook/spa-landing");
  }
};