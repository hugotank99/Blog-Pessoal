import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../../usuario/service/usuario.Service';
import { Bcrypt } from '../Bcript/Bcrypt';
import { UsuarioLogin } from '../entities/usuarioLogin.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt
  ) { }

  async validateUser(username: string, password: string): Promise<any> {

    const buscaUsuario = await this.usuarioService.findByUsuario(username)

    if (!buscaUsuario)
        throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
      
    const match = await this.bcrypt.compararSenhar(buscaUsuario.senha, password)

    if (buscaUsuario && match) {
      const { senha, ...result } = buscaUsuario;
      return result;
    }
    return null;
  }

  async login(usuarioLogin: UsuarioLogin) {

    const payload = { username: usuarioLogin.usuario, sub: "blogpessoal" };

    return {
      usuario: usuarioLogin.usuario,
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
    
  }

}