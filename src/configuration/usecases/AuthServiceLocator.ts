import { inject, injectable } from 'inversify'

import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository'
import SignInUseCase from '../../application/usecase/SignInUseCase'
import { TYPES } from '../../constants/types'

@injectable()
export default class AuthServiceLocator {
  constructor(
    @inject(TYPES.IUserReadOnlyRepository)
    private readRepository: IUserReadOnlyRepository
  ) {}
  public GetSignInUseCase() {
    return new SignInUseCase(this.readRepository);
  }
}
