/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { treinamento, Prisma } from '@prisma/client';

@Injectable()
export class treinamentoService {
  constructor(private prisma: PrismaService) {}

  async get( id: string
  ): Promise<treinamento | null> {
    return this.prisma.treinamento.findUnique({
      where: {
        treinamento_id: Number(id),
      }
    });
  }

  async getAll(): Promise<treinamento[]> {
    return this.prisma.treinamento.findMany();
  }

  
  async add(data: Prisma.treinamentoCreateInput ) {
    return this.prisma.treinamento.create(
      {data}
    );
  }

  update(id: string, data: Prisma.treinamentoUpdateInput) {
    return this.prisma.treinamento.update({
      where: { treinamento_id: parseInt(id) },
      data: data
    })
  }

  async delete(id: string): Promise<treinamento> {
    return this.prisma.treinamento.delete({
      where: {treinamento_id: parseInt(id)},
    });
  }
}