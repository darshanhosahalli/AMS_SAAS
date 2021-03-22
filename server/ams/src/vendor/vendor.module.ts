import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { VendorRepository } from './vendor.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';

@Module({
  imports: [TypeOrmModule.forFeature([VendorRepository]), CrudfactoryModule],
  controllers: [VendorController],
  providers: [VendorService]
})
export class VendorModule {}
