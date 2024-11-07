import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  public create(@Body() createPokemonDto: CreatePokemonDto): Pokemon {
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
