import request from 'supertest';
import { appCreator } from '../../src/server/appCreator';

describe('Auth endpoints', () => {
  let app;
  beforeEach(() => {
    app = appCreator();
  });
  afterEach(() => {});
  it('GET "/api" response is 200', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toEqual(200);
  });
  it('GET "/nonexistent" response is 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toEqual(404);
  });
});
