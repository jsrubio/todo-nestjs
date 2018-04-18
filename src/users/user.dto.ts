import { IsString, IsEmail, Matches } from 'class-validator';

export class UserDto {
  @IsString()
  readonly username: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
