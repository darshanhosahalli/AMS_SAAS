import { Module } from '@nestjs/common';
import { CrudfactoryService } from './crudfactory.service';
import { CreateRecord } from './create.service';
import { DeleteRecord } from './delete.service';
import { UpdateRecord } from './update.service';
import { GetRecords, GetOneRecords } from './get.service';
import { QueryprocessorModule } from 'src/queryprocessor/queryprocessor.module';

@Module({
  imports: [QueryprocessorModule],
  providers: [CrudfactoryService, CreateRecord, UpdateRecord, DeleteRecord, GetRecords, GetOneRecords],
  exports: [CrudfactoryService]
})
export class CrudfactoryModule {}
