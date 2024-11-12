import config from "config";
import express from 'express';
import {ServerOpts} from "./interface.js";
import {parentLogger} from "./logging.js";


const logger = parentLogger.child({module: "start-service"});
const serverOpts = config.get<ServerOpts>('serverOpts');

const server = express();
const {port, host} = serverOpts;

server.listen(port, () => {
    logger.info(`Server is running on http://${host}:${port}`);
});
