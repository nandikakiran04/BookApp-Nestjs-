import { BookEntityService } from './book.entity.service';
import { CreateBookEntityDto } from './dto/create-book.entity.dto';
import { UpdateBookEntityDto } from './dto/update-book.entity.dto';
export declare class BookEntityController {
    private readonly bookEntityService;
    constructor(bookEntityService: BookEntityService);
    create(createBookEntityDto: CreateBookEntityDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBookEntityDto: UpdateBookEntityDto): string;
    remove(id: string): string;
}
