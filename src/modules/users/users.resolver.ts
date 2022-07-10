import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  LoginUserInput,
  RegisteredUser,
  RegisterUserInput,
  TokenResponse,
} from './users.model';
import { UsersService } from './users.service';

@Resolver(() => RegisteredUser)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => RegisteredUser)
  async user(@Args('id', { type: () => ID }) id: string) {
    return await this.userService.getById(id);
  }

  @Mutation(() => RegisteredUser)
  async register(
    @Args('registerUserData') registerUserData: RegisterUserInput,
  ) {
    return await this.userService.createUser(registerUserData);
  }

  @Query(() => TokenResponse)
  async jwt(@Args('loginUserData') loginUserData: LoginUserInput) {
    return await this.userService.login(loginUserData);
  }
}
