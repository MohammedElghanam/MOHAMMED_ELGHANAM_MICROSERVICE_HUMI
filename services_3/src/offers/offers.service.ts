import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { MinioService } from './minio.service';

@Injectable()
export class OffersService {

  constructor(private readonly minioService: MinioService) {}

  async create(createOfferDto: CreateOfferDto) {
    
    console.log(createOfferDto);
    
    console.log(createOfferDto.file);
    
    const bucketName = 'offers';
    const image = await this.minioService.uploadFile( bucketName, createOfferDto.file);
    return image;
  }

  findAll() {
    return `This action returns all offers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offer`;
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}
