import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import getAxiosConfig from 'src/helpers/getAxiosConfig';
import { GenresResolver } from './genres.resolver';
import { GenresService } from './genres.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => getAxiosConfig(process.env.USERS_API),
    }),
  ],
  providers: [GenresResolver, GenresService],
})
export class GenresModule {}
