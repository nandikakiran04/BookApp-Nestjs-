import { Test, TestingModule } from '@nestjs/testing';
import { BookEntityService } from './book.entity.service';

describe('BookEntityService', () => {
  let service: BookEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookEntityService],
    }).compile();

    service = module.get<BookEntityService>(BookEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
