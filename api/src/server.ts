import express from 'express';
import routerUser from './routes/user.router.ts';

import path from 'node:path';

const Client = path.join(import.meta.dirname, '..', '..', 'web');

const app = express();

app.use(express.json());

app.use('/users', routerUser);

app.use(express.static(Client));

app.listen(process.env.PORT);
