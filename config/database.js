const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:Bone20120@fiaptecnico.zrjut.mongodb.net/test')
}

module.exports = conexao
