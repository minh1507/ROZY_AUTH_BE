import { Column, Entity } from 'typeorm';
import { RootEntity } from 'src/common/base/rootEntity.base';

@Entity()
export class Anonymous extends RootEntity {
  @Column('char', { name: 'name', length: 100, nullable: true })
  name: string;

  @Column('varchar', { name: 'phone', length: 100, nullable: true })
  phone: string;

  @Column('varchar', { name: 'email', length: 100, nullable: true })
  email: string;

  @Column('varchar', { name: 'desctiption', length: 1000, nullable: true })
  description: string;

  @Column('varchar', { name: 'desctiptionDelivery', length: 1000, nullable: true })
  descriptionDelivery: string;
}
