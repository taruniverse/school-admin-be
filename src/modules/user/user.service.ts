import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(name: string, email: string, password: string, role: UserRole): Promise<User> {
    const newUser = this.userRepository.create({ name, email, password, role });
    return this.userRepository.save(newUser);
  }

  async getUsersByRole(role: UserRole): Promise<User[]> {
    return this.userRepository.find({ where: { role } });
  }
}
