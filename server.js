const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Load the lodash-id plugin
const lodashId = require('lodash-id');

// Use the plugin
router.db._.mixin(lodashId);

// Apply middleware and router
server.use(middlewares);
server.use(router);

// Start the server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
