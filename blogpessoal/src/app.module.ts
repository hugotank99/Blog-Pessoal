import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Postagens } from './postagem/entities/postagens.entities';
import { PostagensModule } from './postagem/postagens.modules';
import { Tema } from './Tema/entities/temas.entities';
import { TemaModule } from './Tema/tema.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_Blogpessoal',
    entities: [Postagens, Tema],
    synchronize: true
    }),
  
    PostagensModule,
    TemaModule,
    AuthModule,
    UsuarioModule 
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
