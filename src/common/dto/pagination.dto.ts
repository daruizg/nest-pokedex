import { IsOptional, IsInt, Min, Max } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  public offset?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  public limit?: number;
}
