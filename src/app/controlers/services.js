const { time } = require('../../lib/utils')
const Services = require('../models/Services')

module.exports = {
  index(req, res) {
    Services.all(function(services) {
      for (let service of services)
        service.time = time(service.time).time

      return res.render('service-job/index', { services })
    })
  },
  create(req, res) {
    return res.render('service-job/create')
  },
  post(req,res) {
    const keys = Object.keys(req.body)

    for (let key of keys) {
      if (req.body[key] == '')
        return res.send('Please, fill all field')
    }

    Services.create(req.body, function() {
      return res.redirect('/admin/servicos')
    })
  },
  edit(req, res) {
    Services.find(req.params.id, function(service) {
      return res.render('service-job/edit', { service })
    })
  },
  put(req, res) {
    Services.update(req.body, function() {
      return res.redirect('/admin/servicos')
    })
  },
  delete(req, res) {
    Services.delete(req.body.id, function() {
      return res.redirect('/admin/servicos')
    })
  },
  report(req, res) {
    return res.render('service-job/report')
  }
}

