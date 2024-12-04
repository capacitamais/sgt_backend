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
  import { treinamentoService } from './treinamento.service';
  
  import { treinamento as treinamentoModel } from '@prisma/client';
  
  @Controller()
  export class treinamentoController {
    
    constructor(
      private readonly treinamentoService: treinamentoService,
    ) {}
  
    @Get('treinamento')
    async getAll(): Promise<treinamentoModel[]> {
      return this.treinamentoService.getAll();
    }
  
    @Get("treinamento/:id")
    async getOne(@Param("id") id: string): Promise<treinamentoModel | null> {
      return this.treinamentoService.get(id);
    }
  
    @Post("treinamento")
    async add(@Body() treinamento: treinamentoModel): Promise<treinamentoModel | null> {
      return this.treinamentoService.add(treinamento);
    }
  
    @Patch("treinamento/:id")
    async update(@Param("id") id: string, @Body() data: treinamentoModel): Promise<treinamentoModel | null> {
      return this.treinamentoService.update(id, data);
    }
  
    @Delete("treinamento/:id")
    async delete(@Param("id") id: string): Promise<treinamentoModel | null> {
      return this.treinamentoService.delete(id);
    }
   
    
  }