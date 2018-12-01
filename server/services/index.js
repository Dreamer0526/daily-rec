const services = [
  require('./personalServices'),
  require('./authServices')
]

module.exports = (app) => {
  services.forEach(service => service(app))
}
