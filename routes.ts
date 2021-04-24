import { Router } from 'express'
import { MessagesController } from './src/controllers/MessagesController';
import { SettingsController } from './src/controllers/SettingsController';
import { UserController } from './src/controllers/UserController';

const routes = Router();

const settingsController = new SettingsController();
const userController = new UserController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);
routes.post('/users', userController.create);
routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser)


export { routes };