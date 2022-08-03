import { Router } from "express";
import * as MessageController from "./controllers/message.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('API Tech Academy');
});

routes.post('/message', MessageController.message);

export default routes;