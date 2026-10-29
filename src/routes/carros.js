const express = require ("express");
const router = express.Router ();

//GET

const {mecanicos,carros} = require ("../data/store");

router.get ("/"), (req,res)=>{
    res.status(200).json(carros);
};

router.get ("/:id", (req,res)=>{
    const id = Number (res,URLSearchParams.id);
    if (!Number.isInteger(id)||id <=0){
        return res.status (400).json({error:"Id invalido"});
    }
    const carros = carros.find((s)=> s.id === id);
    if (!carros){
        return res.status(404).json ({error:"carros no encontrado"})
    }
    res.status (200).json(mecanicos);
});

//POST

router.post ("/",(req,res)=>{
    const {marca,modelo,año,color,placa,mecanicosId}=req.body;
    if(
        typeof marca !== "string"||
        !name.trim()||
        typeof email !== "string" ||
        !/^[[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ){
        return res.status (400).json({
            error : "Nombre y correo electronico valido son obligatorio"
        });
    }
})

student.push(new carros);