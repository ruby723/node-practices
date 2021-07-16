const models = require('../models');

module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    join: function(req, res) {
        res.render('user/join');
    },
    _join: async function(req, res,next) {
        try{
            const result = await models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender
            });
            // console.log(result);
            res.redirect('/user/joinsuccess');
        } catch(err){
            // err.name, err.message, err.stack
            logger.error(err);
            next(e);
        }
    },
    login: function(req, res,next) {
        try {
            res.render('user/login');
        } catch(e) {
            next(e);
        }
    },
    _login: async function(req, res,next) {
        try {        
            const user = await models.User.findOne({
                attributes: ['no', 'name', 'role'],
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            });

            if(user == null) {
                res.render('user/login', Object.assign(req.body, {
                    result: "fail"
                }));
                return;
            }

            // 로그인
            req.session.authUser = user;
            res.redirect('/');
        } catch(e) {
            next(e);
        }        
    },
    logout: async function(req, res,next){
        try {
            // 로그아웃
            await req.session.destroy();
            res.redirect('/');
        } catch(e) {
            next(e);
        }
    },
    update: async function(req, res,next) {
        const user = await models.User.findOne({
            attributes: ['no', 'name', 'email', 'gender'],
            where: {no: req.session.authUser.no}
        });
        res.render('user/update',{
            no: user.no,
            name:user.name,
            email:user.email,
            gender:user.gender
        });
    },
    // _update: async function(req,res,next){
    //     await models.User.update({
    //         name: req.body.name,
    //         password: req.body.password,
    //         gender:req.body.gender
    //     },
    //     {where:{ no: req.session.authUser.no }
    //     });
    //     res.redirect("/");
    // }
    _update: async function(req, res, next) {
        try {
            const {[req.body.password == '' ? 'password' : '']: remove, ...updateObject} = req.body;
            await models.User.update(updateObject, {
                where: {
                    no: req.session.authUser.no    
                }
            });
            res.redirect("/user/update");
        } catch(err) {
            next(err);
        }    
    }
}