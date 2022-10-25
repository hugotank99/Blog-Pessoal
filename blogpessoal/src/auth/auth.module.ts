import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsuarioModule } from "src/usuario/usuario.module";
import { Bcrypt } from "./Bcript/Bcrypt";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./service/auth.Service";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn:'24'},
        }),
    ],
    providers: [
        Bcrypt,
        AuthService,
        LocalStrategy
    ],
    controllers: [],
    exports: [Bcrypt]
})
export class AuthModule { }