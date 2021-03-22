import { Module } from '@nestjs/common';
import { QueryprocessorService } from './queryprocessor.service';
import { BaseHandler } from './basehandler.service';
import { FieldsQueryDecorator } from './fieldshandler.service';
import { FilterQueryDecorator } from './filterhandler.service';
import { PaginateQueryDecorator } from './paginate.service';
import { SortQueryDecorator } from './sorthandler.service';
import { Query } from './query';

@Module({
  providers: [QueryprocessorService, BaseHandler, FieldsQueryDecorator, FilterQueryDecorator, PaginateQueryDecorator, SortQueryDecorator, Query],
  exports: [QueryprocessorService]
})
export class QueryprocessorModule {}
