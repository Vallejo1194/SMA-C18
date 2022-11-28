const router = require('express').Router();
const routesApi = require('./api');

router.use('./api', routesApi);

module.exports = router;