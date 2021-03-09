import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe, Query, Patch, HttpCode } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

/**
 * Api End point for items module
 */
@Controller('/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  /**
   * Function to create a new item
   * @param createItemDto
   * @returns - the newly created item
   */
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  /**
   * Function to return all the items based on the query
   * @param queryObj
   * @returns - all the items by query
   */
  @Get()
  findAll(@Query() queryObj) {
    return this.itemsService.findAll(queryObj);
  }

  /**
   * Function to return the item specified by id
   * @param id
   * @returns - item with id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

   /**
   * Function to update an item with the specified id
   * @param id
   * @param updateEmployeeDto
   * @returns - the updated employee
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }

  /**
   * Deletes the item specified by id
   * @param id
   */
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}
