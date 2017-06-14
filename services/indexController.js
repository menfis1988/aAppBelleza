'use strict';


exports.render = function(req, res) {
	res.render('index', {
		title: 'Inicio',
		user: JSON.stringify(req.user)
	});
};

exports.renderadmin = function(req, res) {
	res.render('admin', {
		title: 'Inicio',
		user: JSON.stringify(req.user)
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