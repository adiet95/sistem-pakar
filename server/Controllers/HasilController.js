const {Hasil, Test} = require('../models')


class hasilController {

  
static showHasil(req,res){
    // console.log(angka, '<<<<< angka');
		const UserId = +req.params.memberId;
  Hasil.findAll({include: [ Test ]})
  .then((data)=>{
      let angka = data.Test
      console.log(data);
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





}

module.exports = hasilController