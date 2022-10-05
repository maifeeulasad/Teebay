import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  details: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  ownerUsername: string;

  @Field(() => [String], { nullable: true })
  productTypes: string[];
}
