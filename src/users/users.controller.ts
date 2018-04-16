import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiUseTags('users')
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  @ApiOperation({ title: 'Create user' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Invalid request.'})
  async create() {
    // TODO: Create CreateUserDTO
  }

  @Get(':id')
  @ApiOperation({ title: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async get(@Param('id') id: string) {
    return this.usersService.get(id);
  }

  @Put()
  @ApiOperation({ title: 'Update user' })
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async update() {
    // TODO: Create UpdateUserDTO
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete user by ID' })
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}