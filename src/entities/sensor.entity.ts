import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sensor")
export class Sensor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    value:string

    @Column()
    status:string
}