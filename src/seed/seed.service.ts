import { firstValueFrom } from 'rxjs';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { PokeResponse, Result } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(private readonly _httpService: HttpService) {}

  public async executeSeed(): Promise<Result[]> {
    const { data } = await firstValueFrom(
      this._httpService.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=5'),
    );

    data.results.forEach(({ name, url }) => {
      const urlParts = url.split('/');
      const no: number = +urlParts[urlParts.length - 2];

      console.log(`No: ${no}, Name: ${name}`);
    });

    return data.results;
  }
}
