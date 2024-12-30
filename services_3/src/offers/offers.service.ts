import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { MinioService } from './minio.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {

  constructor(
    @InjectModel(Offer.name) private offreModel: Model<Offer>,
    private readonly minioService: MinioService
  ) {}

  async create(createOfferDto: CreateOfferDto) {

    const bucketName = 'offers';
    const image = await this.minioService.uploadFile( bucketName, createOfferDto.file);
    
    const offreData = {
      ...createOfferDto,
      image,
    };

    const newOffer = new this.offreModel(offreData);
  
    return await newOffer.save();
  }

  findAll() {
    return this.offreModel.find();
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
