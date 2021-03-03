import * as express from 'express'
import { inject } from 'inversify'
import { controller, httpPost, interfaces, request, response } from 'inversify-express-utils'

import ISignInUseCase from '../../application/usecase/ISignInUseCase'
import IUserDto from '../../application/usecase/IUserDto'
import AuthServiceLocator from '../../configuration/usecases/AuthServiceLocator'
import { TYPES } from '../../constants/types'

@controller("/auth")
export default class AuthController implements interfaces.Controller {
  private readonly signInUseCase: ISignInUseCase;
  constructor(
    @inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator
  ) {
    this.signInUseCase = serviceLocator.GetSignInUseCase();
  }

  @httpPost("/signin")
  public async signIn(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const userDto: IUserDto = req.body;
    return this.signInUseCase
      .signIn(userDto)
      .then((foundUserDto: IUserDto) => res.status(200).json(foundUserDto))
      .catch((err: Error) => res.status(400).json({ error: err.message }));
  }
}
