class NotAuthenticated extends Error {
  constructor() {
    super();
    this.status = 401;
    this.message = 'Você não está autenticado!';
  }
}

export default NotAuthenticated;
