import { Module } from '@nestjs/common';
import { atividadesController } from './atividades.controller';
import { atividadesService } from './atividades.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [atividadesController],
  providers: [atividadesService, PrismaService],
})
export class atividadesModule {}