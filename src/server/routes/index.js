import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../client/reducers';
import App from '../../client/components/app';

const router = require('express').Router();

router.use('*', (req, res) => {

  const context = {};

  res.write(`<!DOCTYPE html>
  <html>
    <head>
      <noscript>
        <div>
          <b>
            This page may not load correctly with JavaScript disabled at the moment.
            You have been warned.
          </b>
        </div>
      </noscript>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
      <link rel="stylesheet" href="/style.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fugaz+One">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700">
      <title>React-Redux-Isomorphic-Starter</title>
    </head>
    <body>
      <div class="root">`);

  const stream = renderToNodeStream(
    <Provider store={createStore(reducers)}>
    <StaticRouter context={context} location={req.originalUrl} >
    <App />
    </StaticRouter>
    </Provider>
  );

  stream.pipe(res, { end: false, });
  stream.on('end', () => {
    res.write('</div><script type="text/javascript" src="/bundle.js"></script></body></html>');
    res.end();
  });

});

export default router;
