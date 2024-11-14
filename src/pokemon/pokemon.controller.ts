import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';

import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { ParseMongoIdPipe } from '@common/pipes';
import { Pokemon } from './entities';
import { PokemonService } from './pokemon.service';
import { PaginationDto } from '@common/dto/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  // @HttpCode(HttpStatus.OK)
  public create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  public findAll(@Query() paginationDto: PaginationDto): Promise<Pokemon[]> {
    return this.pokemonService.findAll(paginationDto);
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
  public remove(@Param('id', ParseMongoIdPipe) id: string): Promise<void> {
    return this.pokemonService.remove(id);
  }
}
