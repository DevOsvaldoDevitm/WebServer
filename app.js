import { config as configDotenv } from 'dotenv';
configDotenv();
import express from 'express';
import hbs from 'hbs';
import path from 'path';
import * as url from 'url';

const app = express();
const port = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));




app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir content static
app.use(express.static('public'));
 
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Osvaldo',
    titulo: 'Curso Node'
  });
});
 
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Osvaldo',
    titulo: 'Curso Node'
  });
});
 
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Osvaldo',
    titulo: 'Curso Node'
  });
});
 
app.get('*', (rep, res) => {
  res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});