const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contact API',
    description: 'Swagger API for CSE341 student Camden'
  },
  host: 'cse341-lesson-2b.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);