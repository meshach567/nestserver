import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;

    @Column('double precision')
    latitude: number;

    @Column('double precision')
    longitude: number;

    @Column()
    openHrs: string;

    @Column('text', { array: true, nullable: true })
    images: string[];

}