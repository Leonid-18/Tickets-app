import { faresFor } from '../../../lib/database.js';
export const getTickets = async (req, res) => {
  try {
    const agency = req.header('Agency');
    res.json(faresFor(agency));
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};