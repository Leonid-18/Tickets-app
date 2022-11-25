import { faresFor } from '../../../lib/database.js';
export const getTickets = async (req, res) => {
  try {
    const agency = req.header('Agency');
    const tickets = faresFor(agency);
    res.json(aggregate(tickets));
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


/* Mocking db orm query aggregate function*/ 
const aggregate = data => data
.reduce((hash, obj) => ({ ...hash, [obj.duration]:( hash[obj.duration] || [] )
.concat(obj)
.map( ({rider}) =>  ({rider}) )   }), {});