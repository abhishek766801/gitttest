import app from '../index';
import request from 'supertest';

it('checking status', async () => {
  const res =   await request(app).get('/');
  expect(res.status).toBe(200);
});