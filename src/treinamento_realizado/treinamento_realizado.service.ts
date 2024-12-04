/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { treinamento_realizado, Prisma } from '@prisma/client';

@Injectable()
export class treinamento_realizadoService {
  constructor(private prisma: PrismaService) {}

  async get( id: string
  ): Promise<treinamento_realizado | null> {
    return this.prisma.treinamento_realizado.findUnique({
      where: {
        treinamento_realizado_id: Number(id),
      }
    });
  }

  async getAll(): Promise<treinamento_realizado[]> {
    return this.prisma.treinamento_realizado.findMany();
  }

  
  async add(data: Prisma.treinamento_realizadoCreateInput ) {
    return this.prisma.treinamento_realizado.create(
      {data}
    );
  }

  async update(id: string, data: Prisma.treinamento_realizadoUpdateInput) {
    return this.prisma.treinamento_realizado.update({
      where: { treinamento_realizado_id: parseInt(id) },
      data: data
    })
  }

  async delete(id: string): Promise<treinamento_realizado> {
    return this.prisma.treinamento_realizado.delete({
      where: {treinamento_realizado_id: parseInt(id)},
    });
  }
}