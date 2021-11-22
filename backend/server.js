const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

// db.pool.query(`CREATE TABLE lists (
//     id INTEGER AUTO_INCREMENT,
//     value TEXT,
//     PRIMARY KEY (id)`, 
//     (err, results, fileds) => {
//         console.log('results', results)
//     })

app.get('/api/values', function(req, res) {
    db.pool.query('SELECT * FROM lists;', 
    (err, results, fileds) => {
        if (err) 
            return res.status(500).send(err);
        return res.json(results);
    })
})

app.post('/api/value', function(req, res, next) {
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`,
    (err, results, fileds) => {
        if(err) 
            return res.status(500).send(err);
        return res.json({ success: true, value: req.body.value})
    })
})

app.listen(5000, () => {
    console.log('이 어플리케이션 5000번포트임');
})