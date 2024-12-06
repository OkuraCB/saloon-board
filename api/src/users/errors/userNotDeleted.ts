export class UserNotDeleted extends Error {
  constructor() {
    super('User not deleted');
  }
}
