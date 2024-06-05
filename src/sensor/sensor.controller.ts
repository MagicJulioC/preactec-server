import { Body, Controller, Get, Patch, Put } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { Sensor } from 'src/entities/sensor.entity';

@Controller('sensor')
export class SensorController {
    constructor(private sensorService:SensorService){}

    @Patch("update")
    async updateValue(@Body()value:Partial<Sensor>,@Body()time:Partial<Sensor>){
        return await this.sensorService.updateOne(value,time)
    }

    @Get("getV")
    async getValue(){
        return await this.sensorService.getOne(1)
    }
}
