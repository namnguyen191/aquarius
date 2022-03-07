import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as mockData from '../../data/MOCK_DATA.json';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.getProducts();
  }

  async insertProducts(products: CreateProductDto[]): Promise<Product[]> {
    return await this.productRepository.insertProducts(products);
  }

  async insertProduct(product: CreateProductDto): Promise<Product> {
    return this.productRepository.insertProduct(product);
  }

  async resetDB(): Promise<Product[]> {
    await this.productRepository.deleteAllProducts();

    return this.productRepository.insertProducts(mockData);
  }
}
