import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { BookSchema } from './schemas/book.schema';
import { LibrarySchema } from './schemas/library.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Library', schema: LibrarySchema},
    {name: 'Book', schema: BookSchema},

  ])],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
