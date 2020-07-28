// DEPENDENCIES
const router = require('express').Router();
const apiRoutes = require('./api');
// ROUTER
router.use('/api', apiRoutes);
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
// MODULE EXPORTS
module.exports = router;