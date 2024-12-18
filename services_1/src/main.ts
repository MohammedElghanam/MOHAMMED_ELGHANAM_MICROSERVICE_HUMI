import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {


  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001,
    },
  });















  

  // const keycloakHost = process.env.KEYCLOAK_HOST;
  // const keycloakRealm = process.env.KEYCLOAK_REALM;
  // const keycloakClientId = process.env.KEYCLOAK_CLIENT_ID;

  
  await app.listen();
  console.log('Service A is running on port 3001');
  // console.log(`Connecting to Keycloak at ${keycloakHost}`);
}
bootstrap();
