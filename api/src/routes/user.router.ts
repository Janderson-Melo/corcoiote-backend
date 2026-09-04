 import { Router } from 'express';
 import * as UserController from '../controllers/user.controller.ts';

 const routerUser = Router();

 routerUser.get('/', UserController.getAllUser);
 routerUser.get('/:id', UserController.getUserById);


 export default routerUser