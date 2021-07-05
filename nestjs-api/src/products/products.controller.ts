import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService:ProductsService){}
    @Get()
    getAllProducts():Product[]{
        return this.productsService.getAllProducts();
    }
    @Post()
    createProducts(@Body() createProductsDto: CreateProductDto): Product{
        return this.productsService.createProduct(createProductsDto);
    }
}
