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

    async updateOne(value:Partial<Sensor>,time:Partial<Sensor>){
        const updatedFields = { ...time, ...value };
        // Realiza una única llamada de actualización.
        return await this.sensorRepository.update(1, updatedFields);
    }

    async getOne(id:number){
        const value = await this.sensorRepository.findOneBy({id})
        return {value:value.value, time:value.time}
    }
}
