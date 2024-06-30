import { Module } from '@nestjs/common';
import { PlaceResolver } from './place.resolver';
import { PlaceService } from './place.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './entity/place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlaceResolver, PlaceService],
  
})
export class PlaceModule {}
