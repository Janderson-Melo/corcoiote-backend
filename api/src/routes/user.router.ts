 import { Router } from 'express';
 import * as UserController from '../controllers/user.controller.ts';

 const routerUser = Router();

routerUser.get('/', UserController.getAllUser);
routerUser.get('/:id', UserController.getUserById);
routerUser.post('/', UserController.CreateUser);
routerUser.put('/:id', UserController.UpDateUser);

 export default routerUser