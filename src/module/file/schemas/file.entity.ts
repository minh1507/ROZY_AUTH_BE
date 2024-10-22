import { Column, Entity, OneToMany } from 'typeorm';
import { RootEntity } from 'src/common/base/rootEntity.base';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class File extends RootEntity {
  @Column('char', { name: 'file', length: 255, nullable: true })
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  file: string;

  @Column('varchar', { name: 'origin_name', length: 1000, nullable: true })
  originName?: string;

  @Column('varchar', { name: 'mimetype', length: 1000, nullable: true })
  mimetype?: string;
}
