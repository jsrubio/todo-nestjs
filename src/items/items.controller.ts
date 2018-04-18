import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { ItemDto } from './item.dto';

@ApiUseTags('items')
@Controller('items')
export class ItemsController {

  constructor(
    private readonly itemsService: ItemsService,
  ) {}

  @Post()
  @ApiOperation({ title: 'Create item' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Invalid request.'})
  async create(@Body() item: ItemDto) {
    return this.itemsService.create(item);
  }

  @Get(':id')
  @ApiOperation({ title: 'Get item by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async get(@Param('id') id: string) {
    this.itemsService.get(id);
  }

  @Put(':id')
  @ApiOperation({ title: 'Update item' })
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async update(@Param('id') id: string, @Body() item: ItemDto) {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete item by ID' })
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async delete(@Param('id') id: string) {
    this.itemsService.delete(id);
  }
}