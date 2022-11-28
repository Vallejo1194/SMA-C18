const router = require('express').Router();
const routesUser = require('./routesUser');
const routesThoughts = require('./routesThought');

router.use('./users', routesUser);
router.use('./thoughts', routesThoughts);

module.exports = router;