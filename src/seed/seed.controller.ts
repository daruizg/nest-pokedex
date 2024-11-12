import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly _seedService: SeedService) {}

  @Get()
  public executeSeed(): Promise<void> {
    return this._seedService.executeSeed();
  }
}
