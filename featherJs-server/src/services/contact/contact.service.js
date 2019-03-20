// Initializes the `contact` service on path `/contact`
const createService = require('feathers-sequelize');
const createModel = require('../../models/contact.model');
const hooks = require('./contact.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  //Uncomment this to start pagination in the data
  //const paginate = app.get('paginate');

  const options = {
    Model,
    //paginate
  };

  // Initialize our service with any options it requires
  app.use('/contact', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('contact');

  service.hooks(hooks);
};
