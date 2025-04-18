import { PartialType } from '@nestjs/mapped-types';
import { CreateBookEntityDto } from './create-book.entity.dto';

export class UpdateBookEntityDto extends PartialType(CreateBookEntityDto) {}
