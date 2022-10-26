import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Tema } from "../../Tema/entities/temas.entities";
import { Usuario } from "../../usuario/entities/usuario.entity";


@Entity({name:'tb_postagens'})
export class Postagens {
    [x: string]: any;

        @PrimaryGeneratedColumn()
        id: number;

@IsNotEmpty()
@Column({length:100, nullable: false})
titulo:string;

@IsNotEmpty()
@Column({length:1000, nullable:false})
texto: string;

@UpdateDateColumn()
data: Date;

@ManyToOne(()=> Tema, (tema)=> tema.postagem, {
        onDelete: "CASCADE"//quando quero que apague as postagem em cascata
})
tema: Tema

@ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
})
usuario: Usuario
}
