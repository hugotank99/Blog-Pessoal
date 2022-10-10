import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagens } from "./entities/postagens.entities";


@Module({
    imports: [TypeOrmModule.forFeature([Postagens])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class PostagensModule{}