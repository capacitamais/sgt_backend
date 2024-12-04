/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { treinamento_realizadoController } from './treinamento_realizado.controller';
import { treinamento_realizadoService } from './treinamento_realizado.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [treinamento_realizadoController],
  providers: [treinamento_realizadoService, PrismaService],
})
export class treinamento_realizadoModule {}
