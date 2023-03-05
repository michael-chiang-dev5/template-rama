import request from 'supertest';
import { appCreator } from '../../src/server/appCreator';

describe('Auth endpoints', () => {
  it('GET "/api" response is 200', async () => {
    const app = appCreator();
    const response = await request(app).get('/api');
    expect(response.status).toEqual(200);
  });
  it('GET "/nonexistent" response is 404', async () => {
    const app = appCreator();
    const response = await request(app).get('/nonexistent');
    expect(response.status).toEqual(404);
  });
});
