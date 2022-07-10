import {
  Field,
  ID,
  InputType,
  IntersectionType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Length } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName?: string;

  @Field()
  lastName?: string;

  @Field()
  @Length(8)
  password?: string;

  @Field()
  email: string;
}

@InputType()
export class RegisterUserInput extends PickType(
  User,
  ['email', 'firstName', 'lastName', 'password'],
  InputType,
) {}

@InputType()
export class LoginUserInput extends PickType(
  User,
  ['email', 'password'],
  InputType,
) {}

@ObjectType()
export class TokenResponse {
  @Field()
  token: string;
}

@ObjectType()
export class RegisteredUser extends IntersectionType(
  PartialType(PickType(User, ['firstName', 'lastName'] as const)),
  PickType(User, ['email', 'id'] as const),
) {}
