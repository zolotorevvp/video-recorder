import pino from "pino";


export const parentLogger = pino(
    {
        level: process.env.PINO_LOG_LEVEL || "debug"
    }
);
