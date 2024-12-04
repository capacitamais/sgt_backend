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
import { colaboradorService } from './colaborador.service';

import { colaborador as colaboradorModel } from '@prisma/client';

@Controller()
export class colaboradorController {
  
  constructor(
    private readonly colaboradorService: colaboradorService,
  ) {}

  @Get('colaborador')
  async getAll(): Promise<colaboradorModel[]> {
    return this.colaboradorService.getAll();
  }

  @Get("colaborador/:id")
  async getcolaborador(@Param("id") id: string): Promise<colaboradorModel | null> {
    return this.colaboradorService.get(id);
  }

  @Post("colaborador")
  async addcolaborador(@Body() colaborador: colaboradorModel): Promise<colaboradorModel | null> {
    return this.colaboradorService.add(colaborador);
  }

  @Patch("colaborador/:id")
  async updatecolaborador(@Param("id") id: string, @Body() data: colaboradorModel): Promise<colaboradorModel | null> {
    return this.colaboradorService.update(id, data);
  }

  @Delete("colaborador/:id")
  deletecolaborador(@Param("id") id: string): Promise<colaboradorModel | null> {
    return this.colaboradorService.delete(id);
  }
 
  
}