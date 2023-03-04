import { addOne } from '../client/sample';

describe('sample test', () => {
  beforeAll(() => {});
  afterAll(() => {});
  it('function addOne works', async () => {
    return expect(addOne(1)).toEqual(2);
  });
});
