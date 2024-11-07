import { Model } from 'mongoose';

import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';

@Injectable()
export class PokemonService {
  constructor(@InjectModel(Pokemon.name) private readonly _pokemonModel: Model<Pokemon>) {}

  public async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    try {
      const pokemon = await this._pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      if (error.code === 11000)
        throw new BadRequestException(`Pokemon already exists in database: ${JSON.stringify(error.keyValue)}`);

      console.log(error);
      throw new InternalServerErrorException('An error occurred while creating the Pokemon');
    }
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
