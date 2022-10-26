import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "../Tema/Service/tema.service";
import { TemaModule } from "../Tema/tema.module";
import { postagensController } from "./controller/postagem.controller";
import { Postagens } from "./entities/postagens.entities";
import { PostagemService } from "./services/postagens.services";


@Module({
    imports: [TypeOrmModule.forFeature([Postagens]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [postagensController],
    exports: [TypeOrmModule]
})
export class PostagensModule{}