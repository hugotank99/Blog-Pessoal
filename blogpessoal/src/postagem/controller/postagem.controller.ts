import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { get } from "http";
import { Postagens } from "../entities/postagens.entities"
import { PostagemService } from "../services/postagens.services"

@Controller ('/postagens')
 export class postagensController {
    constructor (private readonly PostagemService: PostagemService) {};

        @Get ()
        @HttpCode (HttpStatus.OK)
        findAll (): Promise<Postagens[]>{
            return this.PostagemService.findALL();
        
        }
    @Get ('/:id')
    @HttpCode (HttpStatus.OK)
    findById (@Param('id',ParseIntPipe)
    id: number): Promise<Postagens> {
        return this.PostagemService.findById(id);
        }
    @Post ()
    @HttpCode (HttpStatus.CREATED)
    create (
        @Body()
        postagem: Postagens
    ): Promise<Postagens> { 
        return this.PostagemService.create(postagem);
        }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        postagem: Postagens
    ): Promise<Postagens> {
        return this.PostagemService.update(postagem);
        }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)// o resultado de um delete sera quase sempre 404
    delete (
        @Param(`id`, ParseIntPipe)
        id: number
    ) {
       return this.PostagemService.delete(id); 
    }
 }

