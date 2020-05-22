const express = require('express')
const routes = express.Router()
const base = require('./app/controlers/base')
const customers = require('./app/controlers/customers')
const services = require('./app/controlers/services')

routes.get('/', base.login)
routes.get('/admin', base.home)
routes.get('/admin/agendamento-novo', base.schedule_new)

routes.get('/admin/clientes', customers.index)
routes.get('/admin/clientes/cadastrar-cliente', customers.create)
routes.get('/admin/clientes/:id/editar-cliente', customers.edit)
routes.get('/admin/clientes/relatorio-do-cliente', customers.report)
routes.post('/admin/clientes', customers.post)
routes.put('/admin/clientes', customers.put)
routes.delete('/admin/clientes', customers.delete)

routes.get('/admin/servicos', services.index)
routes.get('/admin/servicos/cadastrar-servico', services.create)
routes.get('/admin/servicos/:id/editar-servico', services.edit)
// routes.get('/admin/servicos/relatorio-do-servico', services.report)
routes.post('/admin/servicos', services.post)
routes.put('/admin/servicos', services.put)
routes.delete('/admin/servicos', services.delete)

module.exports = routes
