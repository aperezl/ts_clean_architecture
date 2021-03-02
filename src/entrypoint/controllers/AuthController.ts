import { inject } from 'inversify'
import { controller, interfaces } from 'inversify-express-utils'

import ISignInUseCase from '../../application/usecase/ISignInUseCase'

@controller("/auth")
export default class AuthController implements interfaces.Controller {
  private readonly signInUseCase: ISignInUseCase;
  constructor(@inject()) {}
}
