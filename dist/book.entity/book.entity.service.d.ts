import { CreateBookEntityDto } from './dto/create-book.entity.dto';
import { UpdateBookEntityDto } from './dto/update-book.entity.dto';
export declare class BookEntityService {
    create(createBookEntityDto: CreateBookEntityDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBookEntityDto: UpdateBookEntityDto): string;
    remove(id: number): string;
}
