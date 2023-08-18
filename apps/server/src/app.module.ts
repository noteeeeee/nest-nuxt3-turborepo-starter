import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig.options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
