import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';

import {App} from './App';

let port: number = 8080;

let server: any = new App().expressApp;
server.listen(port, () => console.log("server listening on port: " + port));