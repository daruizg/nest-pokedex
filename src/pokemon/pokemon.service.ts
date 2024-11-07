import { Injectable } from '@nestjs/common';

import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';

@Injectable()
export class PokemonService {
  public create(createPokemonDto: CreatePokemonDto): Pokemon {
    return null;
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
