/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { user, Prisma } from '@prisma/client';

@Injectable()
export class userService {
  constructor(private prisma: PrismaService) {}

  async user( id: string
  ): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: {
        user_id: Number(id),
      }
    });
  }

  async users(): Promise<user[]> {
    return this.prisma.user.findMany();
  }

  
  async addUser(data: Prisma.userCreateInput ) {
    return this.prisma.user.create(
      {data}
    );
  }

  updateUser(id: string, data: Prisma.userUpdateInput) {
    return this.prisma.user.update({
      where: { user_id: parseInt(id) },
      data: data
    })
  }

  async deleteUser(id: string): Promise<user> {
    return this.prisma.user.delete({
      where: {user_id: parseInt(id)},
    });
  }
}