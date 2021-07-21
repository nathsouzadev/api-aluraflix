import {Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("movies")
export class Movie {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    url: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
