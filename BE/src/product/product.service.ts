import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, // @InjectRepository(User) // private readonly userRepository: Repository<User>,
  ) {}

  async create(createProductInput: CreateProductInput) {
    // const user = await this.userRepository.findOneOrFail({
    //   where: {
    //     username: createProductInput.ownerUsername,
    //   },
    // });
    // const product = this.productRepository.create(createProductInput);
    // product.owner = user;
    // return this.productRepository.save(product);
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
