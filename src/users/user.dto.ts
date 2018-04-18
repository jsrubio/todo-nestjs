import { IsEmail, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiModelProperty()
  @IsString()
  readonly username: string;

  @ApiModelProperty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty()
  @IsString()
  readonly password: string;
}
