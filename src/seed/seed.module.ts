import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { PokemonModule } from '@pokemon';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [HttpModule, PokemonModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
