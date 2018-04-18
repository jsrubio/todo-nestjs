import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@ApiUseTags('users')
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @ApiOperation({ title: 'Create user' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Invalid request.'})
  async create(@Body() user: UserDto) {
    return this.usersService.create(user);
  }

  @Get(':id')
  @ApiOperation({ title: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async get(@Param('id') id: string) {
    return this.usersService.get(id);
  }

  @Put(':id')
  @ApiOperation({ title: 'Update user' })
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async update(@Param('id') id: string, @Body() user: UserDto) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete user by ID' })
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'The record was not found.'})
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}