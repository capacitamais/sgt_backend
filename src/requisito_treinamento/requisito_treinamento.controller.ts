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
  import { requisito_treinamentoService } from './requisito_treinamento.service';
  
  import { requisito_treinamento as requisito_treinamentoModel } from '@prisma/client';
  
  @Controller()
  export class requisito_treinamentoController {
    
    constructor(
      private readonly requisito_treinamentoService: requisito_treinamentoService,
    ) {}
  
    @Get('requisito')
    async getAll(): Promise<requisito_treinamentoModel[]> {
      return this.requisito_treinamentoService.getAll();
    }
  
    @Get("requisito/:id")
    async getOne(@Param("id") id: string): Promise<requisito_treinamentoModel | null> {
      return this.requisito_treinamentoService.get(id);
    }
  
    @Post("requisito")
    async add(@Body() requisito_treinamento: requisito_treinamentoModel): Promise<requisito_treinamentoModel | null> {
      return this.requisito_treinamentoService.add(requisito_treinamento);
    }
  
    @Patch("requisito/:id")
    async update(@Param("id") id: string, @Body() data: requisito_treinamentoModel): Promise<requisito_treinamentoModel | null> {
      return this.requisito_treinamentoService.update(id, data);
    }
  
    @Delete("requisito/:id")
    async delete(@Param("id") id: string): Promise<requisito_treinamentoModel | null> {
      return this.requisito_treinamentoService.delete(id);
    }
   
    
  }