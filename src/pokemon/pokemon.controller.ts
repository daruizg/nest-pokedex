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

  @Get(':term')
  public findOne(@Param('term') term: string): Promise<Pokemon> {
    return this.pokemonService.findOne(term);
  }

  @Patch(':term')
  public update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.update(term, updatePokemonDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<void> {
    return this.pokemonService.remove(id);
  }
}
