import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  public transform(value: string, _: ArgumentMetadata): string {
    if (!isValidObjectId(value)) throw new BadRequestException(`'${value}' is not a valid MongoDB ObjectId`);
    return value;
  }
}
