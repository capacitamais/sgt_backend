/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { user, Prisma } from '@prisma/client';

@Injectable()
export class userService {
  constructor(private prisma: PrismaService) {}

  async get( id: string
  ): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: {
        user_id: Number(id),
      }
    });
  }

  async getAll(): Promise<user[]> {
    return this.prisma.user.findMany();
  }

  
  async add(data: Prisma.userCreateInput ) {
    return this.prisma.user.create(
      {data}
    );
  }

  async update(id: string, data: Prisma.userUpdateInput) {
    return this.prisma.user.update({
      where: { user_id: parseInt(id) },
      data: data
    })
  }

  async delete(id: string): Promise<user> {
    return this.prisma.user.delete({
      where: {user_id: parseInt(id)},
    });
  }
}