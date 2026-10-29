require ("dotenv").config ();
const app = rqeuire ("./sec/app");
const PORT = process.env.PORT||3000;
app.listen (PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto $ {PORT}`);
});

