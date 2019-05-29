const express = require('express');
const router = express.Router();

router.post('/:number', (req, res, next) => {
    let n = req.params.number;
    
    const result =  Math.floor((Math.pow( 1 + Math.sqrt(5), n)
            - Math.pow( 1 - Math.sqrt(5), n)) / (Math.pow(2, n) * Math.sqrt(5)));
    
    res.send(JSON.stringify(result));
});

module.exports = router;