import { Test, TestingModule } from '@nestjs/testing';
import { ServiceOffersService } from './service_offers.service';

describe('ServiceOffersService', () => {
  let service: ServiceOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceOffersService],
    }).compile();

    service = module.get<ServiceOffersService>(ServiceOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
