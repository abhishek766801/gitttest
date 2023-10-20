
import app from '../../app';
import request from 'supertest';
const temp1=request(app);

it('checking status', async (done) => {
 await request(app).post('/api/auth/signup').expect(422);
  done();
  //a
})
