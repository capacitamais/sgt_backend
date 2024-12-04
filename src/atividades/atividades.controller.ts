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
  import { atividadesService } from './atividades.service';
  
  import { atividades as atividadesModel } from '@prisma/client';
  
  @Controller()
  export class atividadesController {
    
    constructor(
      private readonly atividadesService: atividadesService,
    ) {}
  
    @Get('atividade')
    async getAll(): Promise<atividadesModel[]> {
      return this.atividadesService.getAll();
    }
  
    @Get("atividade/:id")
    async get(@Param("id") id: string): Promise<atividadesModel | null> {
      return this.atividadesService.get(id);
    }
  
    @Post("atividade")
    async addatividades(@Body() atividades: atividadesModel): Promise<atividadesModel | null> {
      return this.atividadesService.add(atividades);
    }
  
    @Patch("atividade/:id")
    async updateatividades(@Param("id") id: string, @Body() data: atividadesModel): Promise<atividadesModel | null> {
      return this.atividadesService.update(id, data);
    }
  
    @Delete("atividade/:id")
    async deleteatividades(@Param("id") id: string): Promise<atividadesModel | null> {
      return this.atividadesService.delete(id);
    }
   
    
  }