module.exports = {
  login(req, res) {
    return res.render('home')
  },

  home(req, res) {
    return res.render('home')
  },
  schedule_new(req, res) {
    return res.render('form/create/schedule')
  },

  services(req, res) {
    return res.render('service')
  },
  service_new(req, res) {
    return res.render('form/create/service')
  }
}
