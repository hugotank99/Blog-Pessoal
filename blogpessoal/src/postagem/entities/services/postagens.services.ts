import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Postagens } from "../postagens.entities";

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagens)
        private postagemRepository :Repository <Postagens>

    ){}

async findALL(): Promise<Postagens[]>{
    return await this.postagemRepository.find();
}
}