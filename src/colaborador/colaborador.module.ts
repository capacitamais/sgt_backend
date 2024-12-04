/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { colaboradorController } from './colaborador.controller';
import { colaboradorService } from './colaborador.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [colaboradorController],
  providers: [colaboradorService, PrismaService],
})
export class colaboradorModule {}
