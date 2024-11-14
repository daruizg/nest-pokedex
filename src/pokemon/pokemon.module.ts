import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Pokemon } from './entities';
import { PokemonController } from './pokemon.controller';
import { PokemonSchema } from './entities/pokemon.entity';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [MongooseModule],
})
export class PokemonModule {}
