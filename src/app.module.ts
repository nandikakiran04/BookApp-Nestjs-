import { Module } from '@nestjs/common';
import { BookEntity } from './book.entity/entities/book.entity.entity'; // ✅ adjust if needed

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { BookEntityModule } from './book.entity/book.entity.module';

@Module({
  imports: [TypeOrmModule.forRoot({
                                type: 'mysql',
                                host: 'localhost',
                                port: 3306,
                                username: 'root',
                                password: 'pass@word1',
                                database: 'curd',
                                entities: [BookEntity],
                                synchronize: true,
                              }),BookEntity],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
