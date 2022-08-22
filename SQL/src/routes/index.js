const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('StartSe - Tech Academy - Módulo XI - Banco de Dados');
});

module.exports = router;