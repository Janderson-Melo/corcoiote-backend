import express from 'express';
import routerUser from './routes/user.router.ts';

const app = express();

app.use('/users', routerUser);

app.listen(3000)
