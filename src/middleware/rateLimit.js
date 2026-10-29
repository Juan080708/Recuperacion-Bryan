const rateLimit = require("express-rate-limit");
const limiter = rateLimit ({
    windowMS: Number(process.env.RATE_LIMIT_WINDOWS_MS) || 60000,
        limit: Number (process.env.RATE_LIMIT_MAX) || 100,
        standarHeaders: "drat-7",
        legacyHeaders:false,
        message:{
            error:"Demasiadas solicitudes, intenta de nuevo mas tarde"
        }
});
module.EXPORTS = limiter;