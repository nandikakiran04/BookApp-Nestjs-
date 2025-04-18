"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookEntityDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_book_entity_dto_1 = require("./create-book.entity.dto");
class UpdateBookEntityDto extends (0, mapped_types_1.PartialType)(create_book_entity_dto_1.CreateBookEntityDto) {
}
exports.UpdateBookEntityDto = UpdateBookEntityDto;
//# sourceMappingURL=update-book.entity.dto.js.map