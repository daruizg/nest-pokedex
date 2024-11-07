import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  public create(createPokemonDto: CreatePokemonDto): Pokemon {
    return 'This action adds a new pokemon';
  }

  public findAll(): Pokemon[] {
    return [];
  }

  public findOne(id: number): Pokemon {
    return `This action returns a #${id} pokemon`;
  }

  public update(id: number, updatePokemonDto: UpdatePokemonDto): Pokemon {
    return `This action updates a #${id} pokemon`;
  }

  public remove(id: number): void {}
}
