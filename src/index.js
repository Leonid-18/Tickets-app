import createError from 'http-errors';
import express from 'express';
import cors from 'cors';
import { ticketPurchaseRoute } from './v1/routes/ticketPurchaseRoute.js';
import { ticketPurchaseRouteV2 } from './v2/routes/ticketPurchaseRouteV2.js';

const app = express();

// * CORS * //
app.options('*', cors());

// * set headers * //
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Agency', '*');

  next();
});


// * Routes * //
app.use('/', ticketPurchaseRoute);
app.use('/api/v2', ticketPurchaseRouteV2);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (req.app.get('env') === 'development') {
    res.status(err.status || 500).json({ message: err.message, stack: err.stack });
  } else {
    res.status(err.status || 500).json({ message: err.message });
  }
  next();
});

export { app };