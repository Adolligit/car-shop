class CatchAllMethodsErros extends Error {
  _status: number;

  constructor(message: string, status: number) {
    super(message);
    this._status = status;
  }
}

export default CatchAllMethodsErros;