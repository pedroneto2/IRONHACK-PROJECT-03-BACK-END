class InvalidID extends Error {
  constructor() {
    super();
    this.status = 400;
    this.message = 'ID inválido!';
  }
}

export default InvalidID;
