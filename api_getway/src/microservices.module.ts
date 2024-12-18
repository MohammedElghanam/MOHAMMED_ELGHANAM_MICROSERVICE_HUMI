import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    {
      provide: 'SERVICE_1',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'localhost',
            port: 3001, 
          },
        });
      },
    },
    
    {
      provide: 'SERVICE_2',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'localhost',
            port: 3002,
          },
        });
      },
    },
  ],
  exports: ['SERVICE_1', 'SERVICE_2'],
})
export class MicroservicesModule {}
