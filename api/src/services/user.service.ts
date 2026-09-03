import users from '../mocks/user.mock.ts';
import type { User } from '../types/user.type.ts';


export function findAllUser(): User [] {
    return users;
}