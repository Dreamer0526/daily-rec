const services = [
  require('./personalServices'),
  require('./gradeServices')
]

module.exports = (app) => {
  services.forEach(service => service(app))
}