import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'DEVICE_PACKAGE',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: 'localhost:3001',
    //       package: 'mobile_device',
    //       protoPath: join(__dirname, '../proto/device.proto'),
    //     },
    //   },
    // ]),
    DeviceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
