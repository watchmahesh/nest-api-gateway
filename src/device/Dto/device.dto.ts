import { ApiProperty } from '@nestjs/swagger';
import { IsByteLength, IsNotEmpty, IsUUID, IsOptional,IsNumber, IsPositive, IsString} from 'class-validator';

export class CreateDto {


    @ApiProperty({ example: '01a23bc4d56e7' })
    @IsString()
    device_id: string;

    @ApiProperty({ example: 'Iphone' })
    @IsString()
     name: string;

    @ApiProperty({ example: '11.2' })
    @IsString()
     os_version: string;

    @ApiProperty({ example: 'test name' })
    @IsString()
     customer_name: string;

}
export class FindByIdDto {
  @ApiProperty({example: '1' })
  @IsNotEmpty()
  id: number;
}


export class UpdateDto extends CreateDto{}






