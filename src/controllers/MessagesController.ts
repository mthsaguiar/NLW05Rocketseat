import { Request, Response } from 'express'
import { MessageService } from '../services/MessageService';

class MessagesController{
    async create(request: Request, response: Response){
        const { user_id, admin_id, text } = request.body;

        const messagesService = new MessageService();

        const messages = await messagesService.create( {
            admin_id,
            text,
            user_id
        });

        return response.json(messages)
    }

    async showByUser(request: Request, response: Response){
        const { id } = request.params;

        const messagesService = new MessageService();

        const list = await messagesService.listByUser(id);

        return response.json(list);

    }

}

export {MessagesController};