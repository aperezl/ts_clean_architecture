import IUserReadOnlyRepository from '../application/repositories/IUserReadOnlyRepository'
import User from '../domain/User'

export default class UserRepository implements IUserReadOnlyRepository {
  public fetch(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
