import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';
 
const app = express();
 
 // View templates
/*app.engine('handlebars', handlebars({defaultLayout: 'main'}));*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// Routes
app.get('/', (req, res) => {
	var app = ReactDOMServer.renderToString(<App message="Server App" />);
  res.render('pages/index', {'body': app});
});
 
app.listen(3000, () => console.log('Server running'));
