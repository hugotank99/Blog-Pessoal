import { ApiProperty } from "@nestjs/swagger"

export class UsuarioLogin {

    @ApiProperty()
    public usuario: String
    @ApiProperty()
    public senha: string
    
}