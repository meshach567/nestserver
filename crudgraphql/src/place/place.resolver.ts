import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlaceService } from './place.service';
import { PlaceModel } from './model/place.model';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guard/roles.guard';
import { Roles } from '../common/decorator/roles.decorator';
import { UserRole } from '../user/entity/user.entity';

@Resolver(() => PlaceModel)
@UseGuards(RolesGuard)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Mutation(() => PlaceModel)
  @Roles(UserRole.ADMIN)
  createPlace(@Args('createPlaceInput') createPlaceInput: CreatePlaceInput) {
    return this.placeService.create(createPlaceInput);
  }

  @Query(() => [PlaceModel], { name: 'places' })
  findAll() {
    return this.placeService.findAll();
  }

  @Query(() => PlaceModel, { name: 'place' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.placeService.findOne(id);
  }

  @Mutation(() => PlaceModel)
  @Roles(UserRole.ADMIN)
  updatePlace(@Args('updatePlaceInput') updatePlaceInput: UpdatePlaceInput) {
    return this.placeService.update(updatePlaceInput.id, updatePlaceInput);
  }

  @Mutation(() => Boolean)
  @Roles(UserRole.ADMIN)
  removePlace(@Args('id', { type: () => Int }) id: number) {
    return this.placeService.remove(id).then(() => true);
  }
}
