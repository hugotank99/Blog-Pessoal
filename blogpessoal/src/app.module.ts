import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagens } from './postagem/entities/postagens.entities';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_blogpessoal',
    entities: [Postagens],
    synchronize: true
    
})

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
