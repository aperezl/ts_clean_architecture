import ISignInUseCase from './ISignInUseCase'
import IUserDto from './IUserDto'

export default class SignInUseCase implements ISignInUseCase {
  private userReadOnlyRepository: IUserReadOnlyRepository;

  constructor(userReadOnlyRepository: IUserReadOnlyRepository) {
    this.userReadOnlyRepository = userReadOnlyRepository;
  }

  public signIn(userDto: IUserDto): Promise<IUserDto> {
    throw new Error("Method not implemented.");
  }
}
