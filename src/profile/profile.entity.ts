import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Profile{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 15,
        nullable: true
    })
    FirstName: string;
    
    @Column({
        type: 'varchar',
        length: 15,
        nullable: true
    })
    LastName: string;
    
    @Column({
        type: 'varchar',
        length: 6,
        nullable: true
    })
    Gender: string;
    
    @Column({
        type: 'date',
        nullable: true,
    })
    DateOfBirth: Date;
    
    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    Address: string;
    
    @Column({
        type: 'varchar',
        length: 11,
        nullable: true
    })
    Mobile: string;
    
    @Column({
        nullable: true
    })
    ProfilePic: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
    @DeleteDateColumn() 
    deletedAt: Date;
}