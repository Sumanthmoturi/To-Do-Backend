// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Ensure this path is correct
import { UserService } from './user.service'; // Import your service
import { UserController } from './user.controller'; // Import your controller

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export if used in other modules
})
export class UsersModule {}
