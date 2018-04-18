import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ListDto {
  @ApiModelProperty()
  @IsString()
  readonly user: string;

  @ApiModelProperty()
  @IsString()
  readonly title: string;
}
