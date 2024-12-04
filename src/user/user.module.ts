/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { userService } from './user.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [userController],
  providers: [userService, PrismaService],
})
export class userModule {}
