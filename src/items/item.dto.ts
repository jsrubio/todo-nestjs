import { IsBoolean, IsString } from 'class-validator';

export class ItemDto {
  @IsString()
  readonly list: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly completed: boolean;
}
