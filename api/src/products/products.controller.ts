import { Controller, Get, Logger, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private logger = new Logger('ProductsController');
  constructor(private productService: ProductsService) {}

  @Get()
  async listAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Post()
  async createProduct() {
    return 'creating product...';
  }

  @Get('/reset-db')
  async resetDB() {
    await this.productService.resetDB();
    return 'product db resetted!';
  }
}
