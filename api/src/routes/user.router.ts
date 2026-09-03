 import { Router } from 'express';
 import * as UserController from '../controllers/user.controller.ts';

 const routerUser = Router();

 routerUser.get('/', UserController.getAllUser);

 export default routerUser