import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Offer extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ type: [String] })
  softskills: string[]; // ['Teamwork', 'Communication']

  @Prop({ type: [String] })
  outils: string[]; // ['Git', 'Docker']

  @Prop({ type: [String] })
  seniority: string[]; // ['Junior', 'Senior', 'Engineer']

  @Prop({ type: [String] })
  languages: string[]; // ['English', 'French']

  @Prop()
  timezone: string;

  @Prop()
  industryExperience: string;

  @Prop()
  location: string;

  @Prop()
  duration: string;

  @Prop()
  contract: string;

  @Prop()
  teamSize: string; // Medium Team (7-8 members)

  @Prop()
  rate: string; // ₹850/hour

  @Prop()
  companyName: string;

  @Prop()
  companyDescription: string;

  @Prop()
  companyWebsite: string;

  @Prop()
  companyImage: string;

  @Prop()
  profileMatched: string;

  @Prop()
  requirements: string[];

  @Prop()
  technologies: string[];

  @Prop()
  jobId: string;

  @Prop()
  workEnvironment: string;


}

export const OfferSchema = SchemaFactory.createForClass(Offer);
