class InvalidID extends Error {
  constructor() {
    super();
    this.status = 400;
    this.message = 'Invalid ID!';
  }
}

export default InvalidID;
