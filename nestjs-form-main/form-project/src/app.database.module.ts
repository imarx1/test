import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {UserModule} from './user/user.module'



@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          name: 'default',
          host: configService.get('POSTGRES_HOST', 'localhost'),
          port: configService.get('POSTGRES_PORT', 5432),
          username: configService.get('POSTGRES_USER', 'postgres'),
          password: configService.get('POSTGRES_PASSWORD', 'coolpolice1'),
          database: configService.get('POSTGRES_DB', 'nest-form'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
        }),
      }),
    UserModule  ],
  })

  export class DatabaseModule {}
  