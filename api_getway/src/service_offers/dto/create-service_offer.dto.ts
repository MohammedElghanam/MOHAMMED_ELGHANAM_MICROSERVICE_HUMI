import { IsArray, IsOptional, IsString, IsEnum } from 'class-validator';

export class CreateServiceOfferDto {
  @IsString()
  title: string;

 
}

