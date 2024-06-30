import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreatePlaceInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  location: string;

  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;

  @Field()
  openHours: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  images: string[];
}
