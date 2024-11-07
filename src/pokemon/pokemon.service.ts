import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';

@Injectable()
export class PokemonService {
  constructor(@InjectModel(Pokemon.name) private readonly _pokemonModel: Model<Pokemon>) {}

  public async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    const pokemon = await this._pokemonModel.create(createPokemonDto);
    return pokemon;
  }

  public findAll(): Pokemon[] {
    return [];
  }

  public findOne(id: number): Pokemon {
    return null;
  }

  public update(id: number, updatePokemonDto: UpdatePokemonDto): Pokemon {
    return null;
  }

  public remove(id: number): void {}
}
