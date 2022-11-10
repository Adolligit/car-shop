import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import mocks from '../../mocks/CarModel';
import CarService from '../../../services/car.service';
import CarModel from '../../../models/car.model';
import { ICar } from '../../../interfaces/ICar';
import CatchAllMethodsErros from '../../../errors/CatchAllMethodsErrors';

// before, after= executa uma vez antes/depois de todos os testes
// beforeEach afterEach= executa uma vez antes/depois de cada testes

describe('(Car: Service)', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  afterEach(() => sinon.restore());

  it('{ function: create }.', async () => {
    sinon.stub(carModel, 'create').resolves(mocks.generic);
    const created = await carService.create({} as ICar);
    
    expect(created).to.be.deep.equal(mocks.generic);
  });

  it('{ function: read }.', async () => {
    sinon.stub(carModel, 'read').resolves([mocks.generic]);
    const [found] = await carService.read();

    expect(found).to.be.deep.equal(mocks.generic);
  });

  it('{ function: readOne }', async () => {
    sinon.stub(carModel, 'readOne').resolves(mocks.generic);
    const readed = await carService.readOne('oie');

    expect(readed).to.be.deep.equal(mocks.generic);
  });

  it('{ function: update }.', async () => {
    sinon.stub(carModel, 'update').resolves(mocks.generic);
    const readed = await carService.update('oie', {} as ICar);
    
    expect(readed).to.be.deep.equal(mocks.generic);
  });

  it('{ function: delete }.', async () => {
    sinon.stub(carModel, 'delete').resolves(mocks.generic);
    const readed = await carService.delete('oie');

    expect(readed).to.be.deep.equal(mocks.generic);
  });

});