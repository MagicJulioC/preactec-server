import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Post('add')
    async addOne(@Body() user:User){
         await this.userService.addNew(user)
    }
}
