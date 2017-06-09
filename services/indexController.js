'use strict';


exports.render = function(req, res) {
	// Usar el objeto 'response' para renderizar la view 'index' con un 'title' y propiedades 'userFullName'
	res.render('index', {
		title: 'Inicio',
		user: JSON.stringify(req.user)
	});
};

exports.renderadmin = function(req, res) {
	// Usar el objeto 'response' para renderizar la view 'index' con un 'title' y propiedades 'userFullName'
	res.render('admin', {
		title: 'Inicio',
		useradmin: JSON.stringify(req.useradmin)
	});
};

exports.renderSignin = function(req, res, next) {
  
  if (!req.user) {
    res.render('signin', {
      title: 'Belleza:: Iniciar Sesion'
    });
  } else {
    return res.redirect('/');
  }
};

exports.requiresLogin = function(req, res, next) {
 
  if (!req.isAuthenticated()) {
    return res.status(401).send({
      message: 'Usuario no está identificado'
    });
  }
  next();
};

exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
};