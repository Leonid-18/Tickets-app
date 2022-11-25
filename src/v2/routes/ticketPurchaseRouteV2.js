
import express from 'express';
import {
    getTickets,
} from '../controllers/ticketControllerV2.js';

const ticketPurchaseRouteV2 = express.Router();

ticketPurchaseRouteV2.get('/tickets', getTickets);

export { ticketPurchaseRouteV2 };