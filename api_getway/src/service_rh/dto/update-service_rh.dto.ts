import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceRhDto } from './create-service_rh.dto';

export class UpdateServiceRhDto extends PartialType(CreateServiceRhDto) {}
