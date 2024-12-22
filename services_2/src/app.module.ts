import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Employee } from './employee/entities/employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host: process.env.DB_HOST ,
      port: parseInt(process.env.DB_PORT, 10) ,
      username: process.env.DB_USERNAME ,
      password: process.env.DB_PASSWORD ,
      database: process.env.DB_NAME ,
      entities: [Employee], 
      synchronize: true,
    }),
    EmployeeModule],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
