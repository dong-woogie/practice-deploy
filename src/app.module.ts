import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: false,
      playground: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   port: +process.env.DB_PORT,
    //   database: process.env.DB_NAME,
    //   host: process.env.DB_HOST,
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   synchronize: true,
    //   keepConnectionAlive: true,
    //   logging: process.env.NODE_ENV === 'dev',
    //   entities: [],
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' && '.dev.env',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'production', 'test'),
        DB_NAME: Joi.string(),
        DB_PORT: Joi.string(),
        DB_HOST: Joi.string(),
        DB_USERNAME: Joi.string(),
        DB_PASSWORD: Joi.string(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
