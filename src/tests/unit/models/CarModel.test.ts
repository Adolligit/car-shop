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
  const carModel = new CarModel();
  
  after(() => sinon.restore());
  before(() => {
    sinon.stub(Model, 'create').resolves(mocks.generic);
    sinon.stub(Model, 'find').resolves([mocks.generic]);
    sinon.stub(Model, 'findOne').resolves(mocks.generic);
    sinon.stub(Model, 'findOneAndUpdate').resolves(mocks.generic);
    sinon.stub(Model, 'findOneAndDelete').resolves(mocks.generic);
  });
  
  it('{ function: create }.', async () => {
    const created = await carModel.create(mocks.generic);

    expect(created).to.be.deep.equal(mocks.generic);
  });

  it('{ function: read }.', async () => {
    const [found] = await carModel.read();

    expect(found).to.be.deep.equal(mocks.generic);
  });

  it('{ function: readOne }.', async () => {
    const readed = await carModel.readOne('oie');

    expect(readed).to.be.deep.equal(mocks.generic);
  });

  it('{ function: update }.', async () => {
    const readed = await carModel.update('oie', {} as ICar);

    expect(readed).to.be.deep.equal(mocks.generic);
  });
  it('{ function: delete }.', async () => {
    const readed = await carModel.delete('oie');

    expect(readed).to.be.deep.equal(mocks.generic);
  });
});