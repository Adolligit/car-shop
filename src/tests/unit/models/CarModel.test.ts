import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

// before after= executa uma vez antes de todos os testes
// beforeAll afterAll= executa uma vez antes de cada testes

describe('(Car: Model)', () => {

  after(() => sinon.restore());

  describe('{ function: create }', () => {
    before(() => sinon.stub().resolves());
  });

});