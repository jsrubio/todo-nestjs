import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
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
  async create() {
    // TODO: Create CreateListDTO
  }

  @Get(':id')
  @ApiOperation({ title: 'Get list by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async get(@Param('id') id: string) {
    return this.listsService.get(id);
  }

  @Put()
  @ApiOperation({ title: 'Update list' })
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async update() {
    // TODO: Create UpdateUserDTO
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete list by ID' })
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async delete(@Param('id') id: string) {
    return this.listsService.delete(id);
  }
}