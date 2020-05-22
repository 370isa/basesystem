const { date } = require('../../lib/utils')
const Customers = require('../models/Customers')

module.exports = {
  index(req, res) {
    if (req.query.search) {
      Customers.findBy(req.query.search, function(customers) {
        for (let customer of customers) {
          customer.create_at = date(customer.create_at).format
        }

        return res.render('customer/index', { customers, filter: req.query.search })
      })
    } else {
      Customers.all(function(customers) {
        for (let customer of customers) {
          customer.create_at = date(customer.create_at).format
        }

        return res.render('customer/index', { customers })
      })
    }
  },
  create(req, res) {
    return res.render('customer/create')
  },
  post(req, res) {
    const keys = Object.keys(req.body)

    for (let key of keys) {
      if (req.body[key] == '')
        return res.send('Please, fill all field')
    }

    Customers.create(req.body, function() {
      return res.redirect('/admin/clientes')
    })
  },
  edit(req, res) {
    Customers.find(req.params.id, function(customer) {
      customer.birth = date(customer.birth).iso

      return res.render('customer/edit', { customer })
    })
  },
  put(req, res) {
    const keys = Object.keys(req.body)

    for (let key of keys) {
      if (req.body[key] == '')
        return res.send('Please, fill all field - ' + key)
    }

    Customers.update(req.body, function(){
      return res.redirect('/admin/clientes')
    })
  },
  delete(req, res) {
    Customers.delete(req.body.id, function() {
      return res.redirect('/admin/clientes')
    })
  },
  report(req, res) {
    return res.render('customer/report')
  }
}

