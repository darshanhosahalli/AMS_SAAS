import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';
import { ProjectsRepository } from './projects.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectsRepository]), CrudfactoryModule],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
