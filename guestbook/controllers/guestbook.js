const model = require('../models/guestbook');

module.exports = {
    index: async function (req,res){
        const results = await model.findAll();
        res.render('index',{
            list: results ||[]
        });
    },
    add: async function(req,res){
        const results = await model.insert(req.body);
        res.redirect("/");
    },
    password: function(req,res){
        res.render("delete",{no : req.params.no});
    },
    delete: async function(req,res){
        const results = await model.delete(req.body);
        res.redirect("/");
    }
}