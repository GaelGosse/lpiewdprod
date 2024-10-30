const lib = new (require('../../library.js'));
const { match } = require('assert');
const fs = require('fs');

module.exports = class Contact{
    print(req, res){
        res.render('main/contact', {
            msg: 'nothing'
        })
    }
    process(req, res){
        
        let nom = req.body.nom
        let prenom = req.body.prenom
        let tel = req.body.tel
        let mail = req.body.mail
        let sujet = req.body.sujet
        let message = req.body.message

        let checkWord = new RegExp (`^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+$`)

        let checkNom = nom.match(checkWord)

        let checkPrenom = prenom.match(checkWord)

        let checkTel = tel
        .replace(/ /g, '')
        .replace(/\./g, '')
        .replace(/\//g, '')
        .replace(/\-/g, '')
        .replace(/\_/g, '')
        checkTel = checkTel.match('^[0-9]*$')

        let regexMail = new RegExp ("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
        let checkMail = mail.match(regexMail)
        
        let checkSujet = false;
        if(sujet==='clip_publicitaire' || sujet==='clip_musicaux' || sujet==='evenementiel' || sujet==="shooting_photo"){
            checkSujet = true;
        }

        if(checkNom && checkPrenom && checkTel && checkMail && checkSujet){
            const nodemailer = require("nodemailer");
    
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'testdev0090@gmail.com',
                    pass: 'vlnfbfpxlkloamoa'
                },
                host: 'imap.gmail.com',
                port: 993,
            });
            
            var mailOptions = {
                from: 'testdev0090@gmail.com',
                to: 'lpiewdprod@gmail.com',
                subject: `From contact ${sujet}`,
                text: `
                    nom: ${nom}
                    prenom: ${prenom}
                    tel: ${tel}
                    e-mail: ${mail}
    
                    sujet: ${sujet}
                    message: ${message}
    
                    envoyé à: ${lib.today()} ${lib.now()}
                `
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    fs.appendFileSync(__dirname+'/../../app/log.txt', `${lib.today()} ${lib.now()}\n${error.response}\n/end ----- -----\n\n\n`, 'utf-8')
                    console.log(error)
                    res.render('main/contact', {
                        msg: 'error'
                    })
                } else {
                    res.render('main/contact', {
                        msg: 'send'
                    })
                }
            });
        } // end of autorisation
        else{
            let error = 
            `error occured at: ${lib.today()} ${lib.now()}\ncheckNom: ${checkNom}\ncheckPrenom: ${checkPrenom}\ncheckTel: ${checkTel}\ncheckMail: ${checkMail}\ncheckSujet: ${checkSujet}\n\nnom: ${req.body.nom}\nprenom: ${req.body.prenom}\ntel: ${req.body.tel}\nmail: ${req.body.mail}\nsujet: ${req.body.sujet}\nmessage: ${req.body.message}\n/end ----- -----\n\n\n`

            fs.appendFileSync(__dirname+'/../../app/log.txt', error, 'utf-8')
            res.render('main/contact', {
                msg: 'error'
            })
        }
    }
}