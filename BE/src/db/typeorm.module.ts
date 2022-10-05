import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'teebay',
      username: 'postgres',
      password: 'maifee',
      host: 'localhost',
      port: 5432,
      autoLoadEntities: true,
      type: 'postgres',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class TypeormModule {}
