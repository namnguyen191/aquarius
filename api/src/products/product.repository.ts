import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  private logger = new Logger('ProductRepository');

  async queryAllProducts(): Promise<Product[]> {
    this.logger.log('Querying all products in db');
    const query = this.createQueryBuilder('product');

    return await query.getMany();
  }

  async insertProduct(createProductDto: CreateProductDto): Promise<Product> {
    this.logger.log('Inserting product using dto: ', createProductDto);

    const product = new Product();

    product.name = createProductDto.name;
    product.brand = createProductDto.brand;
    product.description = createProductDto.description;
    product.price = createProductDto.price;
    product.pictureUrl = createProductDto.pictureUrl;
    product.type = createProductDto.type;
    product.quantityInStock = createProductDto.quantityInStock;

    const result = await product.save();

    return result;
  }

  async insertProducts(products: CreateProductDto[]): Promise<Product[]> {
    this.logger.log('Bulk insert products');

    const results = this.save(products);

    return results;
  }

  async deleteAllProducts(): Promise<Product[]> {
    this.logger.log('Deleting all products');

    const results = await this.query(`DELETE FROM ${this.metadata.tableName};`);

    return results;
  }
}
