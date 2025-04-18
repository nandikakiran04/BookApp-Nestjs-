import { IsEmail, IsFQDN, IsNotEmpty, IsString, Length } from "class-validator";
export class CreateBookEntityDto {
      @IsNotEmpty()
      @IsString()
      Name: string;

      @IsNotEmpty()
      @IsEmail()
      BookNum: string;
    }
