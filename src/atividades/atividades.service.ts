/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { atividades, Prisma } from '@prisma/client';

@Injectable()
export class atividadesService {
  constructor(private prisma: PrismaService) {}

  async get( id: string
  ): Promise<atividades | null> {
    return this.prisma.atividades.findUnique({
      where: {
        atividade_id: Number(id),
      }
    });
  }

  async getAll(): Promise<atividades[]> {
    return this.prisma.atividades.findMany();
  }

  
  async add(data: Prisma.atividadesCreateInput ) {
    return this.prisma.atividades.create(
      {data}
    );
  }

  update(id: string, data: Prisma.atividadesUpdateInput) {
    return this.prisma.atividades.update({
      where: { atividade_id: parseInt(id) },
      data: data
    })
  }

  async delete(id: string): Promise<atividades> {
    return this.prisma.atividades.delete({
      where: {atividade_id: parseInt(id)},
    });
  }
}