import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async findOne(email:string){
        const user = await this.userRepository.findOneBy({email})
        if(!user){
            throw new NotFoundException()
        }
        return user
    }

    async addNew(user:User){
        return await this.userRepository.save(user)
    }
}
