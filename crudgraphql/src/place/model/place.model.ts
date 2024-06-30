import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class PlaceModel {
  @Field(() => Int)
  id: number;

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
