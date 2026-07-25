import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private readonly bookModel: Model<Book>,
    ){}
}
