import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreatePlaceInput } from './create-place.input';

@InputType()
export class UpdatePlaceInput extends PartialType(CreatePlaceInput) {
  @Field(() => Int)
  id: number;
}
