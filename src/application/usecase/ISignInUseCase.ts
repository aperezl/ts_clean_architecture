import UserDto from './IUserDto'

export default interface ISignInUseCase {
  signIn(userDto: UserDto): Promise<UserDto>;
}
