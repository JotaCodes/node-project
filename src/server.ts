require('dotenv/config');
const express = require('express');
const CategoryController = require('./controller/CategoryController');
import {  Router } from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const app = express();

app.use(formidable());
app.use(bodyParser.json());
app.use(express.json());
const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

  allowedHeaders: ['Content-Type'],
};

app.use(cors());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(express.static('public'));

const router = Router();

app.use(router);
app.use(express.json());

router.get('/', (req: any, res: any) => {
  res.send('Home Page');
});

router.post('/api/v1/category/register', CategoryController.register);
router.put('/api/v1/category/edit/:id', CategoryController.edit);
router.get('/api/v1/category/list', CategoryController.list);
router.get('/api/v1/category/detail/:id', CategoryController.detail);
router.delete('/api/v1/category/delete/:id', CategoryController.delete);


app.listen(3333, () => 'server running on port 3333');
