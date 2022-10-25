import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tema } from "../entities/temas.entities";


@Injectable()
export class TemaService {
    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ) { }

async findAll(): Promise<Tema[]> {
        return await this.temaRepository.find({
            relations: {
                postagem: true
            }
        });
    }

async findById(id: number): Promise<Tema> {

        let tema = await this.temaRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });

        if (!tema)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

        return tema;
    }

async findByDescricao(descricao: string): Promise<Tema[]> {
        return await this.temaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                postagem: true
            }
        })
    }
async Create (tema: Tema): Promise<Tema> {
        return await this.temaRepository.save(tema);
} 

async Update (tema : Tema): Promise<Tema> {
    let BuscarTema = await this.findById(tema.id)

    if (!BuscarTema || !tema.id)
    throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

return await this.temaRepository.save(tema);
}

/**
 * @desc apaga um tema do bando de dados
 * 
 * @param id indica o tema desejado
 * 
 * @returns um conteudo vazio
 */
async Delete(id: number): Promise<DeleteResult> {

let BuscaTema = await this.findById(id);

if (!BuscaTema)
    throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

return await this.temaRepository.delete(id);

}

}