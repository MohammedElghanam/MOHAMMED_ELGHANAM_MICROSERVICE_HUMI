import { IsArray, IsString } from 'class-validator';

export class CreateOfferDto {
    @IsString()
    title: string;
  
    @IsArray()
    test: string[];

    file: any;
}
