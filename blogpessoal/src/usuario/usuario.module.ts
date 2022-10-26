import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "../auth/Bcript/Bcrypt";
import { UsuarioController } from "./controller/usuario.controller";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./service/usuario.Service";

@Module ({
    
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService, Bcrypt],
    controllers: [UsuarioController],
    exports: [UsuarioService],
})
export class UsuarioModule { }