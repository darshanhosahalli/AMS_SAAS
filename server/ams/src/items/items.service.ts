import { Injectable, Inject, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { ItemsRepository } from './items.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';
import { ItemsEntity } from './entities/item.entity';
import { ITems } from './iterfaces/items.interface';

/**
 * Service class for CRUD operations of Items module
 */
@Injectable()
export class ItemsService {

  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<ItemsEntity>;

  constructor(@InjectRepository(ItemsRepository) private itemsRepository: ItemsRepository){}

  /**
   * creates a new Item
   * @throws conflict exception
   * @param createItemDto
   */
  async create(createItemDto: CreateItemDto): Promise<ITems> {
    try {
      const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
      createOperation.accept(this.itemsRepository);
      return await createOperation.process(createItemDto);
    } catch(error) {
      if(error.status == 409) {
        throw new ConflictException(`item with hsn ${createItemDto.hsn} already exists`)
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

   /**
   * fetch all the items that satisfy the query
   * @returns - all the items 
   */
  async findAll(queryObj: any): Promise<ITems[]> {
    try {
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.itemsRepository);
      return await findAllOperation.process(queryObj);
    } catch(error) {
      console.log(error);
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Fetch an item by id
   * @param id
   * @returns - item by id
   */
  async findOne(id: string): Promise<ITems> {
    try {
      const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
      findOneOperation.accept(this.itemsRepository);
      return await findOneOperation.process(id);
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('item not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Update the item by id
   * @param id
   * @param updateEmployeeDto 
   * @returns - updated item by id
   */
  async update(id: string, updateItemDto: UpdateItemDto): Promise<ITems> {
    try {
      const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
      updateOperation.accept(this.itemsRepository);
      return await updateOperation.process(updateItemDto, id, 'hsn');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('item resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Deletes an item specified by id
   * @param id
   * @throws Not found Exception
   * @throws Internal server exception
   */
  async remove(id: string): Promise<void> {
    try {
      const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
      removeOperation.accept(this.itemsRepository);
      return await removeOperation.process(id, 'hsn');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('item not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

}
