import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private jwt: JwtService,
        private usersService: UsersService
    ){}

    async signIn(email:string,pass:string){
        const user = await this.usersService.findOne(email)
        if(user.password != pass){
            throw new UnauthorizedException()
        }
        return await this.jwt.signAsync({
            id: user.id,
            email: user.email,
        })
    }
}
