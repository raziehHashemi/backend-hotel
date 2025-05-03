import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserRepository } from './model/repository/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy'; // مسیر صحیح استراتژی
import { JwtAuthGuard } from './jwt/jwt.guard'; // مسیر صحیح گارد

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule,
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, JwtAuthGuard], // اضافه کردن استراتژی و گارد
})
export class UserModule {}