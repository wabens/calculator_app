const router = require('express').Router();
const pool = require('../modules/pool');


// Route to GET calculator history
router.get( '/', ( req, res ) => {
  pool.query(`SELECT * FROM "history"`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error getting calculator expressions`, error);
      alert(`Sorry, there was an error getting the calculator history. Please try again later.`)
      res.sendStatus(500);
    })
})

module.exports = router;