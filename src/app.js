const express = require ("express");
const rateLimit = require ("./middlewareRateLimit");

const mecanicosRoutes = require ("./routes/mecanicos.routes");
const carrosRoutes = require("./routes/carros.routes");
const { mecanicos, carros } = require("./data/store");

const app = express ();

app.use(express.json({limit:"10kb"}));
app.use ("/api",rateLimit);

app.get ("/",(req,res) =>{
    res.status (200).json ({
        message:"Taller API funcionando",
        endpoints:{
            mecanicos:"/api/mecanicos",
            carros : "/api/carros"
        }
    });
});

app.use ("/api/mecanicos",mecanicosRoutes);
app.use ("/api/carros",carrosRoutes);

app.use((req,res)=>{
    res.status (404).json ({error: "Ruta no encontrada"});

    app.use((err,req,res,next)=>{
        if (res.headesSent){
            return next (err);
        }
        if (err.type === "entity.parse.failed"){
            return res.status(400).json ({error : "JSON invalido"});
        }

        if (err.type === "entity.too.large"){
            return res.status (413).json ({error: "La solicitud es muy grande"});
            consoler.error(err);
            res.status(500).json({error: "Error interno del servidor"});
        }
    })
})

module.exports = app;