import { Body, Controller, Delete, Get, Inject, Logger, OnModuleInit, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { DeviceDatas, DeviceListAll, DeviceSuccessMessage, MobileService } from 'src/interface/mobiledevice';
import { CreateDto, FindByIdDto, UpdateDto } from './Dto/device.dto';
@ApiTags('Mobile Device')
@Controller()

export class DeviceController implements OnModuleInit {
  private readonly logger = new Logger(DeviceController.name);

  constructor(
    @Inject('DEVICE_PACKAGE')
    private readonly deviceServiceClient: ClientGrpc,
  ) {}

  private deviceService: MobileService;
  onModuleInit() {
    this.deviceService = this.deviceServiceClient.getService<MobileService>('MobileService');

  }

  @Get('/mobile-device')

  async getAllData(@Req() req: any): Promise<DeviceListAll> {

    try {
      const data: DeviceListAll = await firstValueFrom(
        this.deviceService.getMobileDevice({})
      );
      const result = {
        data: data.data,
      };
      return result;
    } catch (error) {
      Logger.error(this.create.name, error);
      throw new RpcException(error);
    }
  }

  @Post('/mobile-device')
  async create(@Body() createDto: CreateDto, @Req() req): Promise<DeviceDatas> {
    try {
      const result: DeviceDatas = await firstValueFrom(
        this.deviceService.create({
          data: {
            ...createDto,
          },
        })
      );
      return result;
    } catch (error) {
      Logger.error(this.create.name, error);
      throw new RpcException(error);
    }
  }

  @Get('/mobile-device/:id')
  @ApiParam({ name: 'id', type:Number,  description: 'Enter the device id' })
  async findById(@Req() req: any, @Param() id: FindByIdDto) {
    try {
      return await firstValueFrom(
        this.deviceService.findById({
          id: id.id,
        })
      );
    } catch (error) {
      Logger.error(this.findById.name, error);
      throw new RpcException(error);
    }
  }

  @Put('/mobile-device/:id')
  @ApiParam({ name: 'id', type: Number })
  async update(
    @Body() updateDto: UpdateDto,
    @Req() req,
    @Param() id: FindByIdDto
  ): Promise<any> {
    try {
      const result = await firstValueFrom(
        this.deviceService.update({
          id: id.id,
          data: {
            ...updateDto,
          },
        })
      );
      return result;
    } catch (error) {
      Logger.error(this.update.name, error);
      throw new RpcException(error);
    }
  }

  @Delete('/mobile-device/:id')
  @ApiParam({ name: 'id', type: Number })
  async delete(
    @Param() id: FindByIdDto,
    @Req() req: any
  ): Promise<DeviceSuccessMessage> {
    try {
      const result = await firstValueFrom(
        this.deviceService.delete({
          id: id.id,
        })
      );
      return result;
    } catch (error) {
      Logger.error(this.delete.name, error);
      throw new RpcException(error);
    }
  }

}
