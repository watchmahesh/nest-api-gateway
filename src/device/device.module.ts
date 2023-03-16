import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DEVICE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3001',
          package: 'mobile_device',
          protoPath: join(__dirname, '../../proto/device.proto'),
          loader: { keepCase: true },

        },
      },
    ]),
  ],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class DeviceModule {}
