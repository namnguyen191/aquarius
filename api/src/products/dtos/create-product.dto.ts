import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateProductBody } from 'shared';

export class CreateProductDto implements CreateProductBody {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsString()
  @IsNotEmpty()
  pictureUrl!: string;

  @IsString()
  @IsNotEmpty()
  type!: string;

  @IsString()
  @IsNotEmpty()
  brand!: string;

  @IsNumber()
  @IsNotEmpty()
  quantityInStock!: number;
}
