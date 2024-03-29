import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import mocks from '../../mock/car-model.mock';
import CarService from '../../../service/car.service';
import CarModel from '../../../model/car.model';
import { ICar } from '../../../interface/car.interface';
import CatchAllMethodsErrors from '../../../error/catch-all-methods-errors';

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

  it('{ function: readOne } com erro', async () => {
    sinon.stub(carModel, 'readOne').resolves(undefined);
    
    try {
      await carService.readOne('mais um teste');
    } catch (error) { 
      expect(error).to.be.an('error');
    }
  });

  it('{ function: update }.', async () => {
    sinon.stub(carModel, 'readOne').resolves(mocks.generic);
    sinon.stub(carModel, 'update').resolves(mocks.generic);
    const readed = await carService.update('oie', mocks.generic);
    
    expect(readed).to.be.deep.equal(mocks.generic);
  });

  it('{ function: update } com erro.', async () => {
    sinon.stub(carModel, 'update').resolves(mocks.generic);
    sinon.stub(carModel, 'readOne').resolves({} as ICar);
    try {
      await carService.update('636c71060b7b6eb1c0b0c464', {} as ICar);
    } catch (error) { 
      expect(error).to.be.an('error');
    }
  });

  it('{ function: update } com erro 2.', async () => {
    sinon.stub(carModel, 'readOne').resolves(undefined);
    sinon.stub(carModel, 'update').resolves(mocks.generic);
    try {
      await carService.update('636c71060b7b6eb1c0b0c464', {} as ICar);
    } catch (error) { 
      expect(error).to.be.an('error');
    }
  });

  it('{ function: delete }.', async () => {
    sinon.stub(carModel, 'readOne').resolves(mocks.generic);
    sinon.stub(carModel, 'delete').resolves(mocks.generic);
    const readed = await carService.delete('oie');

    expect(readed).to.be.deep.equal(mocks.generic);
  });

  it('{ function: delete } com erro.', async () => {
    sinon.stub(carModel, 'readOne').resolves({} as ICar);
    sinon.stub(carModel, 'delete').resolves(mocks.generic);
    try {
      await carService.delete('636c71060b7b6eb1c0b0c464');
    } catch (error) { 
      expect(error).to.be.an('error');
    }
  });

  it('{ function: delete } com erro. 2', async () => {
    sinon.stub(carModel, 'readOne').resolves(undefined);
    sinon.stub(carModel, 'delete').resolves(mocks.generic);
    try {
      await carService.delete('636c71060b7b6eb1c0b0c464');
    } catch (error) { 
      expect(error).to.be.an('error');
    }
  });

});