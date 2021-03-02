import User from '../../domain/User'

export default interface IUserReadOnlyRepository {
  fetch(): Promise<User>;
}
