import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { ListDto } from './list.dto';
import { ListsService } from './lists.service';

@ApiUseTags('lists')
@Controller('lists')
export class ListsController {

  constructor(
    private readonly listsService: ListsService,
  ) {}

  @Post()
  @ApiOperation({ title: 'Create list' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Invalid request.'})
  async create(@Body() list: ListDto) {
    return this.listsService.create(list);
  }

  @Get(':id')
  @ApiOperation({ title: 'Get list by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async get(@Param('id') id: string) {
    return this.listsService.get(id);
  }

  @Put(':id')
  @ApiOperation({ title: 'Update list' })
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async update(@Param('id') id: string, @Body() list: ListDto) {
    return this.listsService.update(id, list);
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete list by ID' })
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async delete(@Param('id') id: string) {
    return this.listsService.delete(id);
  }
}