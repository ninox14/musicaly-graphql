import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { HttpModule } from '@nestjs/axios';
import getAxiosConfig from 'src/helpers/getAxiosConfig';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => getAxiosConfig(process.env.USERS_API),
    }),
  ],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
