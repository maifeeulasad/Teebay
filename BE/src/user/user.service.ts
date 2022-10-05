import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthHelper } from './auth/auth.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // @Inject(AuthHelper) // private readonly helper: AuthHelper,
  ) {}

  signup(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  async login(createUserInput: CreateUserInput) {
    const user = await this.userRepository.findOneOrFail({
      where: {
        username: createUserInput.username,
        password: createUserInput.password,
      },
    });
    return '';
    // return this.helper.generateToken(user);
  }
}
