import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import mocks from '../../mocks/CarModel';
import CarService from '../../../services/car.service';
import CarModel from '../../../models/car.model';
import { ICar } from '../../../interfaces/ICar';

// before, after= executa uma vez antes/depois de todos os testes
// beforeEach afterEach= executa uma vez antes/depois de cada testes

describe('(Car: Service)', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  after(() => sinon.restore());

  before(() => {
    sinon.stub(carService, 'create').resolves(mocks.generic);
    sinon.stub(carService, 'read').resolves([mocks.generic]);
    sinon.stub(carService, 'readOne').resolves(mocks.generic);
    // sinon.stub(carService, 'update').resolves(mocks.generic);
    // sinon.stub(carService, 'delete').resolves(mocks.generic);
  });

  it('{ function: create }.', async () => {
    const created = await carService.create({} as ICar);
    
    expect(created).to.be.deep.equal(mocks.generic);
  });

  it('{ function: read }.', async () => {
    const [found] = await carService.read();

    expect(found).to.be.deep.equal(mocks.generic);
  });

  it('{ function: readOne }.', async () => {
    const readed = await carService.readOne('oie');

    expect(readed).to.be.deep.equal(mocks.generic);
  });

  // it('{ function: update }.', async () => {
  //   const readed = await carService.update('oie', {} as ICar);

  //   expect(readed).to.be.deep.equal(mocks.generic);
  // });
  // it('{ function: delete }.', async () => {
  //   const readed = await carService.delete('oie');

  //   expect(readed).to.be.deep.equal(mocks.generic);
  // });

});