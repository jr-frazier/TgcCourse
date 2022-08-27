import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {get404} from './controllers/error'

const app = express();

app.use(cors())

app.use(bodyParser.json());// for parsing application/json
// tslint:disable-next-line:no-var-requires
const adminRoutes = require('./routes/admin');
// tslint:disable-next-line:no-var-requires
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(8080);
