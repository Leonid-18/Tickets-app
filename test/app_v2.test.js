import { app } from '../src/index.js';
import supertest from 'supertest';
import { expect } from 'chai';

describe('Testing v2 tickets app', () => {
  describe('root route with agency header', () => {
    it('returns fare data as JSON', async () => await
    supertest(app)
        .get('/api/v2/tickets')
        .set('Accept', 'application/json')
        .set('Agency', 'octa')
        .expect(200)
        .then((res) => {
          expect(Object.keys(res.body).length).to.eq(3);

          //only if we do have some mock data(database) for testing correct aggregation
          expect(res.body).to.have.all.keys(['1-hour', '3-day', 'Week pass']);
          expect(res.body['1-hour'].length).to.equal(2);
          expect(res.body['1-hour']).to.deep.equal([{rider:'Adult'},{ rider:'Special'}]);
          expect(res.body['3-day']).to.deep.equal([{rider:'Adult'},{ rider:'Special'}]);
          expect(res.body['Week pass']).to.deep.equal([{rider:'Adult'},{ rider:'Special'}]);
        })
      );
    
    it('raise an error for non-existing Agancy header', async () => await
      supertest(app)
          .get('/api/v2/tickets')
          .set('Accept', 'application/json')
          .set('Agency', 'non-valid')
          .expect(400)
          .then((res) => {
            expect(res.body.error).to.equal('No agency named "non-valid"');
          })
    );

    it('raise an error for non-supporting Agancy header', async () => await
    supertest(app)
        .get('/api/v2/tickets')
        .set('Accept', 'application/json')
        .expect(400)
        .then((res) => {
          expect(res.body.error).to.equal('No agency named "undefined"');
        })
  );
  });




  describe('root route with agency-sfmuni header', () => {
    it('returns fare data as JSON', async () => await
    supertest(app)
        .get('/api/v2/tickets')
        .set('Accept', 'application/json')
        .set('Agency', 'sfmuni')
        .expect(200)
        .then((res) => {
          expect(Object.keys(res.body).length).to.eq(2);

          //only if we do have some mock data(database) for testing correct aggregation
          expect(res.body).to.have.all.keys(['1-hour', '7-day']);
          expect(res.body['1-hour'].length).to.equal(3);
          expect(res.body['1-hour']).to.deep.equal([{rider:'Adult'},{rider:'Youth'},{rider:'Senior'}]);
          expect(res.body['7-day']).to.deep.equal([{rider:'Adult'}]);
        })
      );

    it('raise an error for non-supporting Agancy header', async () => await
    supertest(app)
        .get('/api/v2/tickets')
        .set('Accept', 'application/json')
        .expect(400)
        .then((res) => {
          expect(res.body.error).to.equal('No agency named "undefined"');
        })
  );
  });

  // Synchronous test
//   describe('root route with sfmuni header', () => {
//     it('returns fare data as JSON', () =>
//     supertest(app)
//         .get('/')
//         .set('Accept', 'text/html')
//         .set('Agency', 'sfmuni')
//         .expect(200)
//         .then((res) => {
//           expect(res.body.length).to.eq(4);
//           expect(res.body[0]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
//           expect(res.body[3]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
//         })
//       );
//   });
});
