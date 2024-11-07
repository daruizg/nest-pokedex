import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  // @HttpCode(HttpStatus.OK)
  public create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  public findAll(): Pokemon[] {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Pokemon {
    return this.pokemonService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto): Pokemon {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): void {
    return this.pokemonService.remove(+id);
  }
}
