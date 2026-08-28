import type { User } from '../types/user.type.ts';

const users: User [] = [{
    id: 1,
    name: 'Janderson Melo',
    email: 'jander@gamil.com',
    password: crypto.randomUUID()
}, {
     id: 2,
    name: 'Joao Melo',
    email: 'joao@gamil.com',
    password: crypto.randomUUID()
}, {
     id: 3,
    name: 'Maria Melo',
    email: 'maria@gamil.com',
    password: crypto.randomUUID()
}, {
     id: 4,
    name: 'Jose Melo',
    email: 'jose@gamil.com',
    password: crypto.randomUUID()
}];

export default users;