/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { requisito_treinamentoController } from './requisito_treinamento.controller';
import { requisito_treinamentoService } from './requisito_treinamento.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [requisito_treinamentoController],
  providers: [requisito_treinamentoService, PrismaService],
})
export class requisito_treinamentoModule {}