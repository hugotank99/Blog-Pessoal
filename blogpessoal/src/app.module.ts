import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postagensController } from './postagem/controller/postagem.controller';
import { Postagens } from './postagem/entities/postagens.entities';
import { PostagensModule } from './postagem/postagens.modules';
import { Tema } from './Tema/entities/temas.entities';
import { TemaModule } from './Tema/tema.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_blogpessoal',
    entities: [Postagens, Tema],
    synchronize: true
    }),
PostagensModule,
TemaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
