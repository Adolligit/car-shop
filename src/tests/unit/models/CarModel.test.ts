import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import mocks from '../../mocks/CarModel';
import { Model } from 'mongoose';
import CarModel from '../../../models/car.model';
import { ICar } from '../../../interfaces/ICar';

// before after= executa uma vez antes de todos os testes
// beforeAll afterAll= executa uma vez antes de cada testes

describe('(Car: Model)', () => {
  const carModel = new CarModel('Car');

  after(() => sinon.restore());

  describe('{ function: create }: implementando teste de vento', () => {
    before(() => sinon.stub(Model, 'create').resolves(mocks.create));

    it('vai tudo certinho, vai vendo...', async () => {
      const created = await carModel.create(mocks.create);

      expect(created).to.be.deep.equal(mocks.create);
    });
  });

});