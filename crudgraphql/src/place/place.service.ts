import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './entity/place.entity';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private placeRepository: Repository<Place>,
  ) {}

  create(createPlaceInput: CreatePlaceInput): Promise<Place> {
    const place = this.placeRepository.create(createPlaceInput);
    return this.placeRepository.save(place);
  }

  findAll(): Promise<Place[]> {
    return this.placeRepository.find();
  }

  findOne(id: number): Promise<Place> {
    return this.placeRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePlaceInput: UpdatePlaceInput): Promise<Place> {
    await this.placeRepository.update(id, updatePlaceInput);
    const updatedPlace = await this.placeRepository.findOne({ where: { id } });
    if (!updatedPlace) {
      throw new NotFoundException(`Place with ID ${id} not found`);
    }
    return updatedPlace;
  }

  async remove(id: number): Promise<void> {
    const result = await this.placeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Place with ID ${id} not found`);
    }
  }
}
