import { Controller, Get, Logger } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private logger = new Logger('ProductsController');
  constructor(private productService: ProductsService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get('/reset-db')
  async resetDB() {
    await this.productService.resetDB();
    return 'product db resetted!';
  }
}
