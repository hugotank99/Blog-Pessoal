import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TemaService } from "src/Tema/Service/tema.service";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagens } from "../entities/postagens.entities";


@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagens)
        private postagemRepository: Repository<Postagens>,
        private temaService: TemaService
        
    ) { }

    async findALL(): Promise<Postagens[]> {
        return await this.postagemRepository.find({
            relations:{
                tema: true
            }
        });
    }

    async findById(id: number): Promise<Postagens> {

        let postagem = await this.postagemRepository.findOne({
            where: {
                id
            },
            relations:{
                tema: true
            }
        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async findByTitulo(titulo: string): Promise<Postagens[]> {
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                tema: true
            }
        })
    }

    async create(postagem: Postagens): Promise<Postagens> {
        if (postagem.tema){
            let tema = await this.temaService.findById(postagem.tema.id)

            if (!tema)
                throw new HttpException('tema não encontrado!', HttpStatus.NOT_FOUND)
            
        }
        return await this.postagemRepository.save(postagem);
       
    }

    async update(postagem: Postagens): Promise<Postagens> {
        
        let buscaPostagem = await this.findById(postagem.id);

        if (!buscaPostagem || !postagem.id)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
       
            if (postagem.tema) {
            let tema = await this.temaService.findById(postagem.tema.id)
        if (!tema)
            throw new HttpException('tema não encontrado', HttpStatus.NOT_FOUND);
        }
        
        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult> {
        
        let buscaPostagem = await this.findById(id);

        if (!buscaPostagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);

    }

}