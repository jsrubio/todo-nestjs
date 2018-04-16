import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ItemsService } from './items.service';

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
  async create() {
    // TODO: Create CreateItemDTO
  }

  @Get(':id')
  @ApiOperation({ title: 'Get item by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async get(@Param('id') id: string) {
    this.itemsService.get(id);
  }

  @Put()
  @ApiOperation({ title: 'Update item' })
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async update() {
    // TODO: Create UpdateItemDTO
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete item by ID' })
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async delete(@Param('id') id: string) {
    this.itemsService.delete(id);
  }
}