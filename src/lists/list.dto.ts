import { IsString } from 'class-validator';

export class ListDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly title: string;
}
