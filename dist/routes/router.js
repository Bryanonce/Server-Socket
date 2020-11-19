"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo está bién'
    });
});
router.post('/mensajes', (req, res) => {
    let body = req.body;
    res.json({
        ok: true,
        mensaje: 'Todo está bién POST',
        cuerpo: body.cuerpo,
        de: body.de
    });
});
router.post('/mensajes/:id', (req, res) => {
    let body = req.body;
    let id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Todo está bién POST',
        cuerpo: body.cuerpo,
        de: body.de,
        id
    });
});
exports.default = router;
