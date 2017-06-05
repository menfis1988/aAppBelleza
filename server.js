'use strict'

const express         = require('express');
const path            = require('path');
const bodyParser      = require('body-parser');
const morgan    		  = require('morgan');
const cookieParser 	  = require('cookie-parser');
const session   		  = require('express-session');
const methodOverride 	= require('method-override');
const favicon 		    = require('serve-favicon');
const mongoose        = require('mongoose');
const flash           = require('connect-flash');
const config          = require('./config/config');
const MongoStore      = require('connect-mongo')(session);
const chalk           = require('chalk');
const entorno         = require('./config/').config()
const passportfb        = require('./config/passport');

mongoose.Promise = global.Promise;
mongoose.connect(entorno.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

const passport = passportfb();

// const geoService = require('./services/georoute');
// const tareaService = require('./services/tarearoute');
// const eventoService = require('./services/eventoroute');
// const jornadaService = require('./services/jornadaroute');
// const arbolService = require('./services/arbolroute');
// const cotizacionService = require('./services/cotizacionroute');
// const facturaService = require('./services/facturaroute');
// const proveedorService = require('./services/proveedorroute');
// const pagomongoService = require('./services/pagorouteMongo');
// const mailService = require('./services/mailroute');


const app = express();

app.set('port', entorno.PORT);

app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.json() );   
app.use(bodyParser.urlencoded({ 
	extended: true
}));
app.use(methodOverride());                  
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret,
  store: new MongoStore({
    url: entorno.MONGODB_URI,
    autoReconnect: true
  })
}));

// app.use(passport.initialize());
// app.use(passport.session());

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


// require('./services/indexRoutes')(app);

// const api = require('./routes');

// app.use('/api', api)

// app.use('/api', jornadaService);
// app.use('/api', arbolService);
// app.use('/api', cotizacionService);
// app.use('/api', facturaService);
// app.use('/api', proveedorService);
// app.use('/api', geoService);
// app.use('/api', tareaService);
// app.use('/api', eventoService);
// app.use('/api', pagomongoService);
// app.use('/api', mailService);



app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.blue('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});