var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

 /* MÓDULO CORS */
 var cors = require('cors')

var indexRouter = require('./routes/index');

/* REFERENCIA AL MÓDULO */
const swaggerUi = require('swagger-ui-express')

/* REFERENCIA AL ARCHIVO GENERADO */
const swaggerFile = require('./swagger_output.json')

/* REFERENCIA AL MANEJADOR DE RUTAS */
var usersClassRouter = require('./routes/rest_usersClass');

/* REFERENCIA AL MANEJADOR DE RUTAS */
var tipogClassRouter = require('./routes/rest_tipogClass');

var usersRouter = require('./routes/users');

var app = express();

/* AGREGUE EL MIDDLEWARE CORS */
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */
app.use('/rest/usersClass', usersClassRouter);

/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */
app.use('/rest/tipogClass', tipogClassRouter);

/* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
