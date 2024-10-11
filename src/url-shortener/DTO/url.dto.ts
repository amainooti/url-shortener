import { IsUrl } from 'class-validator';

export class CreateUrlDto {
  @IsUrl()
  long: string;
}
