import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sensor } from 'src/entities/sensor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SensorService {
    constructor(
        @InjectRepository(Sensor)
        private sensorRepository: Repository<Sensor>
    ){}

    async updateOne(value:Partial<Sensor>){
        return await this.sensorRepository.update(1 , value)
    }
}
