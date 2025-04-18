import { Test, TestingModule } from '@nestjs/testing';
import { BookEntityController } from './book.entity.controller';
import { BookEntityService } from './book.entity.service';

describe('BookEntityController', () => {
  let controller: BookEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookEntityController],
      providers: [BookEntityService],
    }).compile();

    controller = module.get<BookEntityController>(BookEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
