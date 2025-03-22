import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRole } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: UserRole, // Role as input
  ) {
    return this.userService.createUser(name, email, password, role);
  }

  @Get('role/:role')
  async getUsersByRole(@Param('role') role: UserRole) {
    return this.userService.getUsersByRole(role);
  }
}
