const { User } = require('../models')

const bcrypt = require("bcryptjs");

class userController {

    static loginForm(req, res) {
      const errors = req.app.locals.errors;
      delete req.app.locals.errors;
      res.render("loginForm", { errors });
    }
  
    static login(req, res) {
      const sample = {
        username: req.body.username,
        password: req.body.password
      }
      User.findOne({
        where: {
          username: sample.username
        }
      })
        .then(data => {
          if (data) {
            // const MemberId = data.id;
            const password_matched = bcrypt.compareSync(sample.password, data.password);
            if (password_matched) {
              // req.session.user = data.username;
              res.redirect("/test");
            } else {
              req.app.locals.errors = `Username / Password Salah`;
              res.redirect("/");
            }
          } else {
            req.app.locals.errors = `Username / Password Salah`;
            res.redirect("/");
          }
        })
        .catch(err => res.send(err));

    }
  
    static registerForm(req, res) {
      res.render("registerForm");
    }
  
    static register(req, res) {
      User.create({
        username : req.body.username,
        password : req.body.password,
        nama : req.body.nama
      })
              .then((data) => {res.redirect("/")})
              .catch(err => res.send(err));
    }
  
    static logout(req, res) {
      req.session.destroy(err => {
        if (err) {
          res.send(err);
        } else {
          res.redirect("/");
        }
        });
    }
  }

module.exports = userController