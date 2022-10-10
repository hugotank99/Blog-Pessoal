import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";


@Entity({name:'tb_postagens'})
export class Postagens {

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
}


