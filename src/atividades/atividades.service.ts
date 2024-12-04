/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { atividades, Prisma } from '@prisma/client';

@Injectable()
export class atividadesService {
  constructor(private prisma: PrismaService) {}

  async getAtividade( id: string
  ): Promise<atividades | null> {
    return this.prisma.atividades.findUnique({
      where: {
        atividade_id: Number(id),
      }
    });
  }

  async getAllAtividades(): Promise<atividades[]> {
    return this.prisma.atividades.findMany();
  }

  
  async addAtividade(data: Prisma.atividadesCreateInput ) {
    return this.prisma.atividades.create(
      {data}
    );
  }

  updateAtividade(id: string, data: Prisma.atividadesUpdateInput) {
    return this.prisma.atividades.update({
      where: { atividade_id: parseInt(id) },
      data: data
    })
  }

  async deleteAtividade(id: string): Promise<atividades> {
    return this.prisma.atividades.delete({
      where: {atividade_id: parseInt(id)},
    });
  }
}