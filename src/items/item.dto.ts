import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class ItemDto {
  @ApiModelProperty()
  @IsString()
  readonly list: string;

  @ApiModelProperty()
  @IsString()
  readonly title: string;

  @ApiModelProperty()
  @IsString()
  readonly description: string;

  @ApiModelProperty()
  @IsBoolean()
  readonly completed: boolean;
}
