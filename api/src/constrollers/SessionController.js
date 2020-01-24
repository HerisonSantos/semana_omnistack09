/*
METODOS UTILIZADOS NO CONTROLLER:

index = Listagem de sessões,
show = listar uma unica sessão,
store = criar uma sessão,
update = alterar uma sessão,
destroy = remover uma sessão
*/

const User = require("../models/User");

module.exports = {
   async store(req, res){
    const { email } = req.body; 

    let user = await User.findOne({ email: email });
    if(!user){
      user = await User.create({ email }, (err) => {
        if(err){
          console.log(err);
          return
        }
      });  
    }

    return res.json(user);
  }
};