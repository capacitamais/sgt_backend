import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { atividadesModule } from './atividades/atividades.module';

@Module({
  imports: [userModule, atividadesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
