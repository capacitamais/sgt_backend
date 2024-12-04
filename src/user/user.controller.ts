/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { userService } from './user.service';

import { user as userModel } from '@prisma/client';

@Controller()
export class userController {
  
  constructor(
    private readonly userService: userService,
  ) {}

  @Get('user')
  async getAll(): Promise<userModel[]> {
    return this.userService.getAll();
  }

  @Get("user/:id")
  async getUser(@Param("id") id: string): Promise<userModel | null> {
    return this.userService.get(id);
  }

  @Post("user")
  async addUser(@Body() user: userModel): Promise<userModel | null> {
    return this.userService.add(user);
  }

  @Patch("user/:id")
  async updateUser(@Param("id") id: string, @Body() data: userModel): Promise<userModel | null> {
    return this.userService.update(id, data);
  }

  @Delete("user/:id")
  deleteUser(@Param("id") id: string): Promise<userModel | null> {
    return this.userService.delete(id);
  }
 
  
}