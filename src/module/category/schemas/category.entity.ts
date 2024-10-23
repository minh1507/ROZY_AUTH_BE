import { Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/base/entity.base';
import { Product } from 'src/module/product/schemas/product.entity';

@Entity()
export class Category extends BaseEntity {
    @OneToMany(() => Product, (item) => item.category)
    product: Product[];
}
