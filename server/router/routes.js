/* eslint-disable quotes */
const router = require('express').Router();
const pool = require('../modules/pool');


// Route to GET calculator history
// http://localhost:5000/calculator
router.get('/', (req, res) => {
  pool.query(`SELECT * FROM "history" ORDER BY "time" ASC LIMIT 10;`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error getting calculator expressions`, error);
      res.sendStatus(500);
    });
});

// Route to POST expression
router.post('/', (req, res) => {
  const expression = req.body;
  console.log(`req.body`, req);

  const values = [
    expression.operand1,
    expression.operand2,
    expression.operator,
    expression.solution,
  ];

  pool.query(`INSERT INTO "history" ("operand1", "operand2", "operator", "solution") VALUES ($1, $2, $3, $4);`, values)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding calculator expression to history`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
