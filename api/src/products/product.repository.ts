import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  private logger = new Logger('ProductRepository');

  async getProducts(): Promise<Product[]> {
    this.logger.log('Querying all products in db');
    // const { status, searchTerm } = filterDto;
    const query = this.createQueryBuilder('product');

    // query.where('task.userId = :userId', { userId: user.id });

    // if (status) {
    //   query.andWhere('task.status = :status', { status });
    // }

    // if (searchTerm) {
    //   query.andWhere(
    //     '(task.title LIKE :searchTerm OR task.description LIKE :searchTerm)',
    //     { searchTerm: `%${searchTerm}%` },
    //   );
    // }

    // try {
    //   const tasks = await query.getMany();
    //   return tasks;
    // } catch (error) {
    //   this.logger.error(
    //     `Failed to get task for user "${
    //       user.username
    //     }", Filters: ${JSON.stringify(filterDto)}`,
    //     error.stack,
    //   );
    //   throw new InternalServerErrorException();
    // }

    return await query.getMany();
  }

  async insertProduct(createProductDto: CreateProductDto): Promise<Product> {
    this.logger.log('Insert product');

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
    this.logger.log('Delete all products');

    const results = await this.query(`DELETE FROM ${this.metadata.tableName};`);

    return results;
  }
}
