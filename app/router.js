const lib = new (require('../library.js'));
const config = require('./config.js');

module.exports = (app) => {

    app.use((req,res,next)=>{
        if(req.url.indexOf('.') == -1){
            console.log(`${lib.today()} ${lib.now()}: `.blue,`http://localhost:${config.port}${req.url}`.underline.cyan)
        }
        next();
    });

    // home
    app.get('/', (req, res) => {
        let Home = require('../src/controllers/Home.js')
        let Controller = new Home()
        Controller.print(req, res) 
    });
    app.get('/marketing_digital', (req, res)=>{
        let MD = require('../src/controllers/MD.js')
        let Controller = new MD()
        Controller.print(req, res) 
    })
    app.get('/prestation_publicitaire', (req, res)=>{
        let Pub = require('../src/controllers/Pub.js')
        let Controller = new Pub()
        Controller.print(req, res) 
    })
    app.get('/autres_services', (req, res)=>{
        let Services = require('../src/controllers/Services.js')
        let Controller = new Services()
        Controller.print(req, res) 
    })

	
    app.get('/qui_sommes_nous', (req, res) => {
		let QSN = require('../src/controllers/QSN.js')
        let Controller = new QSN();
        Controller.print(req, res) ;
    });
    
    // contact
    app.get('/contact', (req, res) => {
		let Contact = require('../src/controllers/Contact.js')
        let Controller = new Contact();
        Controller.print(req, res) ;
    });
    app.post('/contact', (req, res) => {
        let Contact = require('../src/controllers/Contact.js')
        let Controller = new Contact();
        Controller.process(req, res) ;
    });
	
    // app.use((req,res,next) => {
    //     res.status(404);
    //     res.render('404', { url: req.url });
    // });

}