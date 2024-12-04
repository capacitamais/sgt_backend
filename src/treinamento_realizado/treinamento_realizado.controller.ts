/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { treinamento_realizadoService } from './treinamento_realizado.service';

import { treinamento_realizado as treinamento_realizadoModel } from '@prisma/client';

@Controller()
export class treinamento_realizadoController {
  
  constructor(
    private readonly treinamento_realizadoService: treinamento_realizadoService,
  ) {}

  @Get('realizado')
  async getAll(): Promise<treinamento_realizadoModel[]> {
    return this.treinamento_realizadoService.getAll();
  }

  @Get("realizado/:id")
  async gettreinamento_realizado(@Param("id") id: string): Promise<treinamento_realizadoModel | null> {
    return this.treinamento_realizadoService.get(id);
  }

  @Post("realizado")
  async addtreinamento_realizado(@Body() treinamento_realizado: treinamento_realizadoModel): Promise<treinamento_realizadoModel | null> {
    return this.treinamento_realizadoService.add(treinamento_realizado);
  }

  @Patch("realizado/:id")
  async updatetreinamento_realizado(@Param("id") id: string, @Body() data: treinamento_realizadoModel): Promise<treinamento_realizadoModel | null> {
    return this.treinamento_realizadoService.update(id, data);
  }

  @Delete("realizado/:id")
  async deletetreinamento_realizado(@Param("id") id: string): Promise<treinamento_realizadoModel | null> {
    return this.treinamento_realizadoService.delete(id);
  }
 
  
}