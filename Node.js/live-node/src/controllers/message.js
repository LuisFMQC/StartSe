import * as MessageService from "../services/message.js";

async function message(req, res){
    const { message, phoneNumber } = req.body;
    try{
        const responseMessage = await MessageService.sendMessage(message, phoneNumber);
        res.send(responseMessage);
    } catch(error){
        res.status(error.status).send(error);
    }
}

export { message };