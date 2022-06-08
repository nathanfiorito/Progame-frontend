import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Match } from "../../decorators/match.decorator";

export class SignUpDTO {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @ApiProperty()
    username: string

    @IsString()
    @IsEmail()
    @ApiProperty()
    email: string

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {message: 'senha muita fraca'})
    @ApiProperty()
    password: string;

    @MinLength(8)
    @MaxLength(20)
    @Match('password')
    @ApiProperty()
    passwordConfirm: string
}