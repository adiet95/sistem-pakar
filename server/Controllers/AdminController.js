const { Admin } = require('../models')

const bcrypt = require("bcryptjs");

class adminController {

    static adminForm(req, res) {
      const errors = req.app.locals.errors;
      delete req.app.locals.errors;
      res.render("adminForm", { errors });
    }
  
    static adminLogin(req, res) {
      const sample = {
        username: req.body.username,
        password: req.body.password
      }
      Admin.findOne({
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
              res.redirect("/hasil");
            } else {
              req.app.locals.errors = `Username / Password Salah`;
              res.redirect("/admin");
            }
          } else {
            req.app.locals.errors = `Username / Password Salah`;
            res.redirect("/admin");
          }
        })
        .catch(err => res.send(err));

    }

    static registerForm(req, res) {
        res.render("adminRegis");
      }
    
      static register(req, res) {
        Admin.create({
          username : req.body.username,
          password : req.body.password,
          nama : req.body.nama
        })
                .then((data) => {res.redirect("/admin")})
                .catch(err => res.send(err));
      }

    static logout(req, res) {
      req.session.destroy(err => {
        if (err) {
          res.send(err);
        } else {
          res.redirect("/admin");
        }
        });
    }
  }

module.exports = adminController