import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "../Tema/Service/tema.service";
import { TemaModule } from "../Tema/tema.module";
import { PostagemController } from "./controller/postagem.controller";
import { Postagem } from "./entities/postagens.entities";
import { PostagemService } from "./services/postagens.services";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagensModule{}