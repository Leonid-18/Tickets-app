import { app } from './src/index.js';

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('app listening at http://' + host + ':' + port);
});
