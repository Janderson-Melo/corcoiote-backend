import type { Request, Response } from 'express';
import * as UserService from "../services/user.service.ts";

export function getAllUser(_request: Request,response: Response): void {
    const users = UserService.findAllUser();

    response.status(200).json(users);
};

export function getUserById(request: Request,response: Response): void {
    const id = Number(request.params.id)

    const user = UserService.findUserById(id);

    response.status(200).json(user);
};