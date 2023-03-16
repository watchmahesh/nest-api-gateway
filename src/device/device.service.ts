import { Injectable } from '@nestjs/common';

@Injectable()
export class DeviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
