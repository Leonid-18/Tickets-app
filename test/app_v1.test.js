import { app } from '../src/index.js';
import supertest from 'supertest';
import { expect } from 'chai';

describe('app v1', () => {
  describe('root route with agency header', () => {
    it('returns fare data as JSON', async () => await
    supertest(app)
        .get('/')
        .set('Accept', 'application/json')
        .set('Agency', 'octa')
        .expect(200)
        .then((res) => {
          expect(res.body.length).to.eq(6);
          expect(res.body[0]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
          expect(res.body[5]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
        })
      );
  });

  // FIXME We don't have DART as a client any more and this can be removed
  describe('dart', () => {
    it('returns fare data as JSON', async() => await
    supertest(app)
        .get('/')
        .set('Accept', 'application/json')
        .set('Agency', 'dart')
        .expect(400)
        .then((res) => {
          expect(res.body.error).to.equal('No agency named "dart"');
        })
      );
  });

  // TODO Figure out why this doesn't work RL 04/12/2014

  // Synchronous test
  describe('root route with sfmuni header', () => {
    it('returns fare data as JSON', () =>
    supertest(app)
        .get('/')
        .set('Accept', 'text/html')
        .set('Agency', 'sfmuni')
        .expect(200)
        .then((res) => {
          expect(res.body.length).to.eq(4);
          expect(res.body[0]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
          expect(res.body[3]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
        })
      );
  });
});
