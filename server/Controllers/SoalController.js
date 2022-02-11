const {Soal, Jawaban, User} = require('../models')


class soalController {

  static addSoal(req,res){
    Soal.findAll()
    .then(data=>{
        res.render('addSoal', {data})
    })
    .catch(err=>{
        let errors = []  
        err.errors.forEach(e => {
            errors.push(e.message)
        });
        res.render('error',{errors})
    })
}

static addPostSoal(req,res){
    Soal.create({
        code : req.body.code,
        name : req.body.name,
        namadeskripsi : req.body.namadeskripsi
    }).then(data =>{
        res.redirect('/soal')
    }).catch(err=> {
        let errors = []  
        err.errors.forEach(e => {
            errors.push(e.message)
        });
        res.render('error',{errors})
    })
}

static showSoal(req,res){
  Soal.findAll({include: [ Jawaban ]})
  .then((data)=>{
      res.render('soal', {data})
  })
  .catch((err)=>{
      let errors = []  
      err.errors.forEach(e => {
          errors.push(e.message)
      });
      res.render('error',{errors})
  })
}

static editSoal(req,res){
  let soal = null
  Soal.findByPk(+req.params.id)
  .then(data => {
      soal = data
      return Soal.findAll()
  }).then(data => {
      res.render('editSoal', {soal, data})
  }).catch(err => {
      let errors = []  
      err.errors.forEach(e => {
          errors.push(e.message)
      });
      res.render('error',{errors})
  })
}

static deleteSoal(req,res){
  Soal.destroy({
      where : {
          id : +req.params.id
      }
  })
  .then(()=>{
      res.redirect('/soal')
  })
  .catch(()=>{
      let errors = []  
      err.errors.forEach(e => {
          errors.push(e.message)
      });
      res.render('error',{errors})
  })
}



}

module.exports = soalController