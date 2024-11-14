import { isValidObjectId, Model } from 'mongoose';

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';
import { PaginationDto } from '@common/dto/pagination.dto';

@Injectable()
export class PokemonService {
  constructor(@InjectModel(Pokemon.name) private readonly _pokemonModel: Model<Pokemon>) {}

  public async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    try {
      const pokemon = await this._pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleException(error);
    }
  }

  public async findAll(paginationDto: PaginationDto): Promise<Pokemon[]> {
    const { offset = 0, limit = 20 } = paginationDto;
    return await this._pokemonModel.find().skip(offset).limit(limit).sort({ no: 1 }).select('-__v');
  }

  public async findOne(term: string): Promise<Pokemon> {
    const cleanTerm = term.toLowerCase().trim();

    const searchConditions = [
      { condition: !isNaN(+term), query: (): Promise<Pokemon | null> => this._pokemonModel.findOne({ no: term }) },
      { condition: isValidObjectId(term), query: (): Promise<Pokemon | null> => this._pokemonModel.findById(term) },
      { condition: true, query: (): Promise<Pokemon | null> => this._pokemonModel.findOne({ name: cleanTerm }) },
    ];

    for (const { condition, query } of searchConditions) {
      if (!condition) continue;

      const pokemon = await query();
      if (pokemon) return pokemon;
    }

    throw new NotFoundException(`Pokemon with term '${term}' not found`);
  }

  public async update(term: string, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.findOne(term);

    if (updatePokemonDto.name) updatePokemonDto.name = updatePokemonDto.name.toLowerCase();

    try {
      Object.assign(pokemon, updatePokemonDto);
      return await pokemon.save();
    } catch (error) {
      this.handleException(error);
    }
  }

  public async remove(id: string): Promise<void> {
    // Form 1
    // const pokemon = await this.findOne(id);
    // await pokemon.deleteOne();

    // Form 2
    // await this._pokemonModel.findByIdAndDelete(id);

    // Form 3
    const { deletedCount } = await this._pokemonModel.deleteMany({ _id: id });
    if (deletedCount === 0) throw new NotFoundException(`Pokemon with id '${id}' not found`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleException(error: any): void {
    if (error.code === 11000)
      throw new BadRequestException(`Pokemon already exists in database: ${JSON.stringify(error.keyValue)}`);

    console.log(error);
    throw new InternalServerErrorException('An error occurred while processing the request');
  }
}
