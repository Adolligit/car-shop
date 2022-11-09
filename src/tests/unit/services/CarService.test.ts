import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import mocks from '../../mocks/CarModel';
import CarService from '../../../services/car.service';
import CarModel from '../../../models/car.model';
import { ICar } from '../../../interfaces/ICar';

// before after= executa uma vez antes de todos os testes
// beforeAll afterAll= executa uma vez antes de cada testes

describe('(Car: Service)', () => {
  const carModel = new CarModel('Car');

  after(() => sinon.restore());

  before(() => {
    sinon.stub(carModel, 'create').resolves({} as ICar);
    // sinon.stub(carModel, 'read').resolves({} as ICar[]);
    // sinon.stub(carModel, 'readOne').resolves({} as ICar);
    // sinon.stub(carModel, 'update').resolves({} as ICar);
    // sinon.stub(carModel, 'delete').resolves({} as ICar);
  });

  it('{ function: create }.', async () => {
    const created = await CarService.create({} as ICar);

    expect(created).to.be.deep.equal(mocks.generic);
  });

  // it('{ function: read }.', async () => {
  //   const [found] = await CarService.read();

  //   expect(found).to.be.deep.equal(mocks.generic);
  // });

  // it('{ function: readOne }.', async () => {
  //   const readed = await CarService.readOne('oie');

  //   expect(readed).to.be.deep.equal(mocks.generic);
  // });

  // it('{ function: update }.', async () => {
  //   const readed = await CarService.update('oie', {} as ICar);

  //   expect(readed).to.be.deep.equal(mocks.generic);
  // });
  // it('{ function: delete }.', async () => {
  //   const readed = await CarService.delete('oie');

  //   expect(readed).to.be.deep.equal(mocks.generic);
  // });

});