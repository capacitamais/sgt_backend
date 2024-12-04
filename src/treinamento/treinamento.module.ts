/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { treinamentoController } from './treinamento.controller';
import { treinamentoService } from './treinamento.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [treinamentoController],
  providers: [treinamentoService, PrismaService],
})
export class treinamentoModule {}