import { IsNotEmpty } from "class-validator";
import { Postagens } from "../../postagem/entities/postagens.entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_temas"})
export class Tema {
    
    @PrimaryGeneratedColumn()    
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string;

    @OneToMany(() => Postagens, (postagem) => postagem.tema)//quando a letra e minuscula e um objeto
    postagem: Postagens[];
}