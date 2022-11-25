
import express from 'express';
import {
    getTickets,
} from '../controllers/ticketController.js';

const ticketPurchaseRoute = express.Router();

ticketPurchaseRoute.get('/', getTickets);

export { ticketPurchaseRoute };