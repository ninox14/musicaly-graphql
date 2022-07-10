import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresService {
  constructor(private readonly httpService: HttpService) {}
}
