import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Tema } from "../entities/temas.entities";
import { TemaService } from "../Service/tema.service";

@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller("/tema")
@ApiBearerAuth()
export class TemaController {
  constructor(private readonly temaService: TemaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tema[]> {
    return this.temaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
    return this.temaService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findBydescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
    return this.temaService.findByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Tema: Tema): Promise<Tema> {
    return this.temaService.Create(Tema);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Tema: Tema): Promise<Tema> {
    return this.temaService.Update(Tema);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.temaService.Delete(id);
  }

}