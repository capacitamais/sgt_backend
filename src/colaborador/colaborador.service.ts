/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { colaborador, Prisma } from '@prisma/client';

@Injectable()
export class colaboradorService {
  constructor(private prisma: PrismaService) {}

  async get( id: string
  ): Promise<colaborador | null> {
    return this.prisma.colaborador.findUnique({
      where: {
        colaborador_id: Number(id),
      }
    });
  }

  async getAll(): Promise<colaborador[]> {
    return this.prisma.colaborador.findMany();
  }

  
  async add(data: Prisma.colaboradorCreateInput ) {
    return this.prisma.colaborador.create(
      {data}
    );
  }

  async update(id: string, data: Prisma.colaboradorUpdateInput) {
    return this.prisma.colaborador.update({
      where: { colaborador_id: parseInt(id) },
      data: data
    })
  }

  async delete(id: string): Promise<colaborador> {
    return this.prisma.colaborador.delete({
      where: {colaborador_id: parseInt(id)},
    });
  }
}