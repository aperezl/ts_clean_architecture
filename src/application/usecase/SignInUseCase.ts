import User from '../../domain/User'
import IUserReadOnlyRepository from '../repositories/IUserReadOnlyRepository'
import ISignInUseCase from './ISignInUseCase'
import IUserDto from './IUserDto'

export default class SignInUseCase implements ISignInUseCase {
  private userReadOnlyRepository: IUserReadOnlyRepository;

  constructor(userReadOnlyRepository: IUserReadOnlyRepository) {
    this.userReadOnlyRepository = userReadOnlyRepository;
  }

  public async signIn(userDto: IUserDto): Promise<IUserDto> {
    const user = new User(
      userDto.id,
      userDto.name,
      userDto.email,
      userDto.password,
      userDto.type
    );
    const foundUserDto = await this.userReadOnlyRepository.fetch(user);
    return foundUserDto;
  }
}
