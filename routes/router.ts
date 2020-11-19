import {Router, Request, Response} from 'express';
const router = Router();

router.get('/mensajes',(req:Request,res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'Todo está bién'
    })  
});

router.post('/mensajes',(req:Request,res:Response)=>{
    let body = req.body;
    res.json({
        ok:true,
        mensaje: 'Todo está bién POST',
        cuerpo: body.cuerpo,
        de: body.de
    })  
});

router.post('/mensajes/:id',(req:Request,res:Response)=>{
    let body = req.body;
    let id = req.params.id;
    res.json({
        ok:true,
        mensaje: 'Todo está bién POST',
        cuerpo: body.cuerpo,
        de: body.de,
        id
    })  
});

export default router;