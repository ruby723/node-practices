const models = require("../models");
const Sequelize = require("sequelize");
module.exports = {
  list: async function (req, res, next) {
    try {
      const results = await models.Board.findAll({
        attributes: ["no","title","contents",
        [ Sequelize.fn("date_format",Sequelize.col("reg_date"),"%Y/%m/%d %H:%i:%s"),"regdate",],
        "hit", "groupno", "orderno", "depth", "userno"
        ],
        include:[{
            model:models.User,
            attributes:["name"],
            // where:{ userno: models.User.no}
        }],
        order: Sequelize.literal("groupno DESC"),
        // limit:5
      });
      res.render("board/list", { list: results || [] });
    } catch (err) {
      next(err);
    }
  },
  view: async function(req, res, next){
      try{
        const results = await models.Board.findOne({
            attributes:["no", "title","hit", "contents"],
            where:{no:req.params.no}
        })
        await models.Board.update({
            hit: results.hit+1
        },{
          where:{no: results.no}
        });
        res.render("board/view",{results});
      } catch(err){
          next(err);
      }
  },
  delete: async function (req, res, next) {
    try {
        await models.Board.destroy({
          where: {
            no: req.body.no
          },
        });
        res.redirect("/board")
      } catch (err) {
        next(err);
      }
  },
  write: async function(req,res,next){
    res.render("board/write");
  },
  add: async function (req, res, next) {
    try {
        const group= await models.Board.max('groupno');
      await models.Board.create({
          title: req.body.title,
          contents: req.body.contents,
          groupno:group+1,
          orderno:0,
          depth:0,
          userno: req.session.authUser.no
      });
      res.redirect("/board");
    } catch (err) {
      next(err);
    }
  },
  modify: async function(req,res){
    const results = await models.Board.findOne({
        attributes:["no", "title","contents"],
        where:{no:req.params.no}
    })
    res.render("board/modify",{results})
  },
  _modify: async function(req,res,next){
    try{
        await models.Board.update({
          title: req.body.title,
          contents: req.body.contents
        },{
            where:{no: req.body.no}
        });
        res.redirect("/board");
    } catch(err){
        next(err);
    }
  },
  comment: async function(req,res,next){
    try{
        res.render("board/comment",req.params);
    } catch(err){
      next(err);
    }
  },
  _comment: async function(req,res,next){
    try{
      const result = await models.Board.findOne({
        attributes:["no","groupno","orderno","depth"],
        where:{no:req.body.no}
      })
      await models.Board.create({
        title: req.body.title,
        contents: req.body.contents,
        groupno:result.groupno,
        orderno:result.orderno+1,
        depth:result.depth+1,
        userno: req.session.authUser.no
      });
      res.redirect("/board")
    } catch(err){
      next(err);
    }
  }
};