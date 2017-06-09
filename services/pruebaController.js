var express = require('express');
var Factura = require('../models/Candidatas');

var pruebarouter = express.Router();

pruebarouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

pruebarouter.route('/facturas')
  .get(function(req, res) {
    Factura.find(function(err, factura) {
      if (err) {
        return res.send(err);
      }
        res.json(factura);
    });
});

pruebarouter.route('/facturas')
  .post(function(req, res) {
  var factura = new Factura(req.body);

  factura.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Factura Added' });
  });
});

pruebarouter.route('/facturas')
  .get(function(req, res) {
    Factura.find(function(err, factura) {
      if (err) {
        return res.send(err);
      }
      res.json(factura);
    });
  })

  .post(function(req, res) {
    var factura = new Factura(req.body);

    factura.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Factura Added' });
    });
  });

pruebarouter.route('/facturas/:id')
  .put(function(req,res){
     Factura.findOne({ _id: req.params.id }, function(err, factura) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          factura[prop] = req.body[prop];
        }
    // save 
        factura.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'factura updated!' });
    });
  });
});

pruebarouter.route('/facturas/:id')
    .get(function(req, res) {
      Factura.findOne({ _id: req.params.id}, function(err, factura) {
        if (err) {
          return res.send(err);
        }
        res.json(factura);
  });
});

pruebarouter.route('/facturas/:id')
    .delete(function(req, res) {
      Factura.remove({
        _id: req.params.id
      }, function(err, factura) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = pruebarouter;