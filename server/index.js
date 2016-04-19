import path from 'path';
import express from 'express';
import React from 'react';
import https from 'https';

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
	performRequest('/api/articles/5713aa2f5d59236900902fa3', 'GET', null, function(response){
	  var props = {
		id : response.data._id,
		title : response.data.title,
		summary : response.data.contentSummary,
		content : response.data.content,
		author : {
		  "authorId": "arunskaimal",
		  "authorName": "Arun S Kaimal",
		  "authorImageLink": "/articles/author/Arun_S_Kaimal.jpg",
		  "authorNickName": "arunsk",
		  "authorAbout": "Self proclaimed Communist, Cricket enthusiast, Liverpool FC fan, Critic of everything.",
		  "authorRole": "Junior Editor"		
		},
		publishedDate : response.data.publishDate,
		featured : response.data.images.featured.path,
	  };

	  var app = ReactDOMServer.renderToStaticMarkup(<App { ...props } />);
  	  res.render('pages/index', {'body': app});
	});
	console.log("Sample");
	
});

function performRequest(endpoint, method, data, success) {
  /*
  var dataString = JSON.stringify(data);
  var headers = {};
  if (method == 'GET') {
    endpoint += '?' + querystring.stringify(data);
  }
  else {
    headers = {
      'Content-Type': 'application/json',
      'Content-Length': dataString.length
    };
  } 
  */
  var options = {
    host: 'stage01.sportscafe.in',
    path: endpoint,
    method: method,
    /* headers: headers */
  };

  var req = https.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      //console.log(responseString);
      var responseObject = JSON.parse(responseString);
      success(responseObject);
    });
  });

  //req.write(dataString);
  req.end();
}
 
app.listen(4000, () => console.log('Server running'));
