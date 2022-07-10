import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { registeredDataDto } from './dto/user.dto';
import {
  LoginUserInput,
  RegisteredUser,
  RegisterUserInput,
  TokenResponse,
} from './users.model';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async getById(userId: string) {
    const resp = await firstValueFrom(
      this.httpService
        .get<registeredDataDto>(`${userId}`)
        .pipe(map((response) => response.data)),
    );
    const { firstName, lastName, email, id } = resp;
    return {
      id,
      email,
      firstName,
      lastName,
    };
  }

  async createUser(user: RegisterUserInput): Promise<RegisteredUser> {
    const resp = await firstValueFrom(
      this.httpService
        .post<registeredDataDto>('/register', user)
        .pipe(map((response) => response.data)),
    );

    const { firstName, lastName, email, id } = resp;

    return {
      id,
      firstName,
      lastName,
      email,
    };
  }
  async login(user: LoginUserInput): Promise<TokenResponse> {
    const resp = await firstValueFrom(
      this.httpService
        .post<{ jwt: string }>('/login', user)
        .pipe(map((response) => response.data)),
    );

    return { token: resp.jwt };
  }
}
