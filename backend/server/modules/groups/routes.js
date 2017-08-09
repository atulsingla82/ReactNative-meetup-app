import {Router} from 'express';
import * as GroupController from './controller';

const routes = new Router();

routes.post('/groups/new', GroupController.createGroup);

export default routes;