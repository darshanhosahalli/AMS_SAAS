import { Module } from '@nestjs/common';
import { CrudfactoryService } from './crudfactory.service';
import { CreateRecord } from './create.service';
import { DeleteRecord } from './delete.service';
import { UpdateRecord } from './update.service';
import { GetRecords, GetOneRecords } from './get.service';

@Module({
  providers: [CrudfactoryService, CreateRecord, UpdateRecord, DeleteRecord, GetRecords, GetOneRecords],
  exports: [CrudfactoryService]
})
export class CrudfactoryModule {}
