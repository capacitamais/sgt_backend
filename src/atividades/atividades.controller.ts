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
  
    @Get('getAllAtividades')
    async getAllatividadess(): Promise<atividadesModel[]> {
      return this.atividadesService.getAllAtividades();
    }
  
    @Get("getAtividade/:id")
    getatividades(@Param("id") id: string): Promise<atividadesModel | null> {
      return this.atividadesService.getAtividade(id);
    }
  
    @Post("addAtividade")
    addatividades(@Body() atividades: atividadesModel): Promise<atividadesModel | null> {
      return this.atividadesService.addAtividade(atividades);
    }
  
    @Patch("updateAtividade/:id")
    updateatividades(@Param("id") id: string, @Body() data: atividadesModel): Promise<atividadesModel | null> {
      return this.atividadesService.updateAtividade(id, data);
    }
  
    @Delete("deleteAtividade/:id")
    deleteatividades(@Param("id") id: string): Promise<atividadesModel | null> {
      return this.atividadesService.deleteAtividade(id);
    }
   
    
  }