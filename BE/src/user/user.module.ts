import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthHelper } from './auth/auth.helper';
import { JwtStrategy } from './auth/auth.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', property: 'user' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: 'secret',
        signOptions: { expiresIn: 36000000 },
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserResolver, UserService], // AuthHelper, JwtStrategy],
})
export class UserModule {}
