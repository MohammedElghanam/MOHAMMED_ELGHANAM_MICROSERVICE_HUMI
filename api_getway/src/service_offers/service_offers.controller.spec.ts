import { Test, TestingModule } from '@nestjs/testing';
import { ServiceOffersController } from './service_offers.controller';
import { ServiceOffersService } from './service_offers.service';

describe('ServiceOffersController', () => {
  let controller: ServiceOffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceOffersController],
      providers: [ServiceOffersService],
    }).compile();

    controller = module.get<ServiceOffersController>(ServiceOffersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
