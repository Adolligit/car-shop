import Sinon, * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { ICar } from '../../../interface/car.interface';

import mocks from '../../mock/car-model.mock';
import CarModel from '../../../model/car.model';
import CarController from '../../../controller/car.controller';
import CarService from '../../../service/car.service';

// before after= executa uma vez antes de todos os testes
// beforeAll afterAll= executa uma vez antes de cada testes

describe('(Car: Controller)', () => {
  const model = new CarModel();
  const service = new CarService(model);
  const controller = new CarController(service);

  const request = {} as Request;
  const response = {} as Response;
  
  afterEach(() => sinon.restore());
  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(undefined);
    response.end = sinon.stub().returns(undefined);
  });
  
  it('{ function: create }.', async () => {
    sinon.stub(service, 'create').resolves(mocks.generic);
    await controller.create(request, response);

    expect((response.status as sinon.SinonStub).calledWith(201)).is.true;
  });

  it('{ function: read }.', async () => {
    sinon.stub(service, 'read').resolves([mocks.generic]);
    await controller.read(request, response);

    expect((response.status as sinon.SinonStub).calledWith(200)).is.true;
  });

  it('{ function: readOne }.', async () => {
    sinon.stub(service, 'readOne').resolves(mocks.generic);
    request.params = { id: "Koê?"};
    await controller.readOne(request, response);

    expect((response.status as sinon.SinonStub).calledWith(200)).is.true;
  });

  it('{ function: update }.', async () => {
    sinon.stub(service, 'update').resolves(mocks.generic);
    request.params = { id: "Koê dois? kk"};
    await controller.update(request, response);

    expect((response.status as sinon.SinonStub).calledWith(200)).is.true;
    expect((response.json as sinon.SinonStub).calledWith(mocks.generic)).is.true;
  });

  it('{ function: delete }.', async () => {
    sinon.stub(service, 'delete').resolves(mocks.generic);
    request.params = { id: "Whata fuc is coninoni?"};
    await controller.delete(request, response);

    expect((response.status as sinon.SinonStub).calledWith(204)).is.true;
  });
});