import { IsArray, IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  title: string;

  @IsString()
  desc: string;

  @IsArray()
  @IsString({ each: true })
  softskills: string[];

  @IsArray()
  @IsString({ each: true })
  outils: string[];

  @IsArray()
  @IsString({ each: true })
  seniority: string[];

  @IsArray()
  @IsString({ each: true })
  languages: string[];

  @IsString()
  timezone: string;

  @IsString()
  industryExperience: string;

  @IsString()
  location: string;

  @IsString()
  duration: string;

  @IsString()
  contract: string;

  @IsString()
  teamSize: string;

  @IsString()
  rate: string;

  @IsString()
  companyName: string;

  @IsString()
  companyDescription: string;

  @IsString()
  companyWebsite: string;

//   @IsString()
  file: any;

  @IsString()
  profileMatched: string;

  @IsArray()
  @IsString({ each: true })
  requirements: string[];

  @IsArray()
  @IsString({ each: true })
  technologies: string[];

  @IsString()
  jobId: string;

  @IsString()
  workEnvironment: string;

}
