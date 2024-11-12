import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';

import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly _seedService: SeedService) {}

  @Get()
  public executeSeed(@Query('limit', new ParseIntPipe({ optional: true })) limit?: number): Promise<string> {
    return this._seedService.executeSeed(limit);
  }
}
