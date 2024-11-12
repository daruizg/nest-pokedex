import { Controller, Get } from '@nestjs/common';

import { SeedService } from './seed.service';
import { Result } from './interfaces/poke-response.interface';

@Controller('seed')
export class SeedController {
  private _name = 'David';

  constructor(private readonly _seedService: SeedService) {}

  @Get()
  public executeSeed(): Promise<Result[]> {
    return this._seedService.executeSeed();
  }
}
