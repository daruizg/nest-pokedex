import { firstValueFrom } from 'rxjs';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '@pokemon/entities';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    private readonly _httpService: HttpService,
    @InjectModel(Pokemon.name) private readonly _pokemonModel: Model<Pokemon>,
  ) {}

  public async executeSeed(limit = 150): Promise<string> {
    const { data } = await firstValueFrom(
      this._httpService.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`),
    );

    await this._pokemonModel.deleteMany({}); // Same as delete * from pokemons
    const pokesToInsert: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const urlParts = url.split('/');
      const no: number = +urlParts[urlParts.length - 2];
      pokesToInsert.push({ no, name });
    });

    await this._pokemonModel.insertMany(pokesToInsert);
    return `Seed executed successfully - ${limit} pokemons created`;
  }
}
