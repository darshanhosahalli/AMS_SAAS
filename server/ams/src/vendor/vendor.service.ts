import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';
import { VendorRepository } from './vendor.repository';

/**
 * Service class for CRUD operations of vendor module
 */
@Injectable()
export class VendorService {

  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<Vendor>;

  constructor(@InjectRepository(VendorRepository) private vendorRepository: VendorRepository){}

  /**
   * creates a new vendor
   * @param createEmployeeDto
   */
  async create(createVendorDto: CreateVendorDto) {
    try {
      const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
      createOperation.accept(this.vendorRepository);
      return await createOperation.process(createVendorDto);
    } catch(error) {
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

   /**
   * fetch all the vendors
   * @returns - all the vendors
   */
  async findAll() {
    try {
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.vendorRepository);
      return await findAllOperation.process();
    } catch(error) {
      console.log(error);
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Fetch a vendor by id
   * @param id
   * @returns - vendor by id
   */
  async findOne(id: number) {
    try {
      const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
      findOneOperation.accept(this.vendorRepository);
      return await findOneOperation.process(id);
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('vendor not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Update the vendor by id
   * @param id
   * @param updateEmployeeDto 
   * @returns - updated vendor by id
   */
  async update(id: number, updateVendorDto: UpdateVendorDto) {
    try {
      const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
      updateOperation.accept(this.vendorRepository);
      return await updateOperation.process(updateVendorDto, id, 'vid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('vendor resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Deletes a vendor specified by id
   * @param id
   * @throws Not found Exception
   * @throws Internal server exception
   */
  async remove(id: number) {
    try {
      const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
      removeOperation.accept(this.vendorRepository);
      return await removeOperation.process(id, 'vid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('vendor resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }
}
