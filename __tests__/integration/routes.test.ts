const request = require('supertest');
const { appCreator } = require('../../server/appCreator');

describe('Auth endpoints', () => {
  let app;
  beforeEach(() => {
    app = appCreator({});
  });
  afterEach(() => {});
  it('GET "/api" response is 200', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toEqual(200);
  });
});
