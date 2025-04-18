import { Injectable } from '@nestjs/common';
import { CreateBookEntityDto } from './dto/create-book.entity.dto';
import { UpdateBookEntityDto } from './dto/update-book.entity.dto';

@Injectable()
export class BookEntityService {
  create(createBookEntityDto: CreateBookEntityDto) {
    return 'This action adds a new bookEntity';
  }

  findAll() {
    return `This action returns all bookEntity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookEntity`;
  }

  update(id: number, updateBookEntityDto: UpdateBookEntityDto) {
    return `This action updates a #${id} bookEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookEntity`;
  }
}
