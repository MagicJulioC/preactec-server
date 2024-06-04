import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { SensorModule } from './sensor/sensor.module';

@Module({
  imports: [
    JwtModule.register({
      global:true,
      secret: process.env.JWT_SECRET || "123",
      signOptions:{expiresIn:"30d"}
    }),
    TypeOrmModule.forRoot({
      type:"postgres",
      host: process.env.PG_HOST || "localhost",
      port: parseInt(process.env.PG_PORT) || 5432,
      username: process.env.PG_USERNAME || "postgres",
      password: process.env.PG_PASSWORD || "julio",
      database: process.env.PG_DB || "restapi",
      synchronize:false,
      entities:[join(__dirname,'**/**.entity{.ts,.js}')]
    }),
    UsersModule,
    AuthModule,
    SensorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
