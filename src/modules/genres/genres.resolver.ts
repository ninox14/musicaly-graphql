import { Resolver } from '@nestjs/graphql';
import { Genre } from './genres.model';

@Resolver(() => Genre)
export class GenresResolver {}
