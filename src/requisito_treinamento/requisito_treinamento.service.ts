/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { requisito_treinamento, Prisma } from '@prisma/client';
import { atividades } from '@prisma/client';  
import { treinamento } from '@prisma/client';  

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
    const existe_atividade_id = await this.prisma.atividades.findUnique({where: {atividade_id: data.id_atividade}});
    const existe_treinamento_id = await this.prisma.treinamento.findUnique({where: {treinamento_id: data.id_treinamento}});
    console.log(existe_atividade_id);
    console.log(existe_treinamento_id);
    if(!existe_atividade_id) throw new Error("Atividade não encontrada");
    if(!existe_treinamento_id) throw new Error("Treinamento não encontrado");  

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