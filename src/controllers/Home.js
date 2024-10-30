const fs = require('fs');
const publicpath = `${__dirname}/../../public/`
module.exports = class Home{
    print(req, res){
        let imgs = 'x'

        res.render(`main/accueil`, {
            imgs,
        })
    }
}