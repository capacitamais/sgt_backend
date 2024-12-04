/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { requisito_treinamento, Prisma } from '@prisma/client';

@Injectable()
export class requisito_treinamentoService {
  constructor(private prisma: PrismaService) {}

  async get( id: string
  ): Promise<requisito_treinamento | null> {
    return this.prisma.requisito_treinamento.findUnique({
      where: {
        requisito_id: Number(id),
      }
    });
  }

  async getAll(): Promise<requisito_treinamento[]> {
    return this.prisma.requisito_treinamento.findMany();
  }

  
  async add(data: Prisma.requisito_treinamentoCreateInput ) {
    return this.prisma.requisito_treinamento.create(
      {data}
    );
  }

  update(id: string, data: Prisma.requisito_treinamentoUpdateInput) {
    return this.prisma.requisito_treinamento.update({
      where: { requisito_id: parseInt(id) },
      data: data
    })
  }

  async delete(id: string): Promise<requisito_treinamento> {
    return this.prisma.requisito_treinamento.delete({
      where: {requisito_id: parseInt(id)},
    });
  }
}