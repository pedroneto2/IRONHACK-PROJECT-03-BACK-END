class NotAuthenticated extends Error {
  constructor() {
    super();
    this.status = 401;
    this.message = 'Not authenticated.';
  }
}

export default NotAuthenticated;
