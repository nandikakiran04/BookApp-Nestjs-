import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookEntityService } from './book.entity.service';
import { CreateBookEntityDto } from './dto/create-book.entity.dto';
import { UpdateBookEntityDto } from './dto/update-book.entity.dto';

@Controller('book.entity')
export class BookEntityController {
  constructor(private readonly bookEntityService: BookEntityService) {}

  @Post()
  create(@Body() createBookEntityDto: CreateBookEntityDto) {
    return this.bookEntityService.create(createBookEntityDto);
  }

  @Get()
  findAll() {
    return this.bookEntityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookEntityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookEntityDto: UpdateBookEntityDto) {
    return this.bookEntityService.update(+id, updateBookEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookEntityService.remove(+id);
  }
}
