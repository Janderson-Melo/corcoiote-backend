import type { Request, Response } from 'express';
import * as UserService from "../services/user.service.ts";

export function getAllUser(_request: Request,response: Response): void {
    const users = UserService.findAllUser();

    response.status(200).json(users);
};