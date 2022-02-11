const {Test, User} = require('../models');
const hasil = require('../models/hasil');


class soalController {

  static addtest(req,res){
    Test.findAll()
    .then(data=>{
        res.render('soalTest', {data})
    })
    .catch(err=>{
        let errors = []  
        err.errors.forEach(e => {
            errors.push(e.message)
        });
        res.render('error',{errors})
    })
}

static addPostTest(req,res){
 
    Test.create({
        nama : req.body.nama,
        kelas : req.body.kelas,
        jawaban1 : req.body.jawaban1,
        jawaban2 : req.body.jawaban2,
        jawaban3 : req.body.jawaban3,
        jawaban4 : req.body.jawaban4,
        jawaban5 : req.body.jawaban5,
        jawaban6 : req.body.jawaban6,
        jawaban7 : req.body.jawaban7,
        jawaban8 : req.body.jawaban8,
        jawaban9 : req.body.jawaban9,
        jawaban10 : req.body.jawaban10,
        hasil : req.body.hasil,
    }).then(data =>{
        if(data.hasil == 'Auditory'){
            res.render('audio')
        } else if(data.hasil == 'Visual'){
            res.render('visual')
        } else if(data.hasil == 'Kinestetic'){
            res.render('kinestetic')
        }
    })
    .catch(err => res.send(err));

}

static showTest(req,res){

   Test.findAll()
   .then((data)=>{
       res.render('hasil', {data})
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
  Test.findByPk(+req.params.id)
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

static deleteTest(req,res){
  Test.destroy({
      where : {
          id : +req.params.id
      }
  })
  .then(()=>{
      res.redirect('/hasil')
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