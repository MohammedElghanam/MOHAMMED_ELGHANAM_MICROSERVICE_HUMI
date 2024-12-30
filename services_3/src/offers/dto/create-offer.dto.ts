import { IsString } from 'class-validator';

export class CreateOfferDto {
    @IsString()
    title: string;
}
