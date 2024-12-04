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

  @Get('users')
  async getAllUsers(): Promise<userModel[]> {
    return this.userService.users();
  }

  @Get("getuser/:id")
  getUser(@Param("id") id: string): Promise<userModel | null> {
    return this.userService.user(id);
  }

  @Post("adduser")
  addUser(@Body() user: userModel): Promise<userModel | null> {
    return this.userService.addUser(user);
  }

  @Patch("updateuser/:id")
  updateUser(@Param("id") id: string, @Body() data: userModel): Promise<userModel | null> {
    return this.userService.updateUser(id, data);
  }

  @Delete("deleteuser/:id")
  deleteUser(@Param("id") id: string): Promise<userModel | null> {
    return this.userService.deleteUser(id);
  }
 
  
}