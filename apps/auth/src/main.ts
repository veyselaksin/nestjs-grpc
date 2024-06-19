import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH } from '@app/common';
import { INestMicroservice } from '@nestjs/common';

async function bootstrap() {
  const app:INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule,  {
    transport: Transport.GRPC,
    options: {
      protoPath: join(__dirname, "../auth.proto"),
      package: AUTH
    }
  })

  await app.listen();
}
bootstrap();
