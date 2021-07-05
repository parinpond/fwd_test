import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ProductsService {
    private products : Product[]=[];

    getAllProducts(): Product[]{
        return this.products;
    }
    createProduct(createProductDto:CreateProductDto): Product {
        const {genderCd,dod, planCode,premiumPerYear,paymentFrequency,saPerYear} = createProductDto;
        const products : Product={
            productID : uuidv4(),
            genderCd,
            dod, 
            planCode,
            premiumPerYear,
            paymentFrequency,
            saPerYear
        };
        console.log(products);
        this.products.push(products);
        return products;
    }
}
