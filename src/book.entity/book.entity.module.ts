import { Module } from '@nestjs/common';
import { BookEntityService } from './book.entity.service';
import { BookEntityController } from './book.entity.controller';

@Module({
  controllers: [BookEntityController],
  providers: [BookEntityService],
})
export class BookEntityModule {}
