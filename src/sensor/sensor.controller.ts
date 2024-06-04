import { Body, Controller, Patch, Put } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { Sensor } from 'src/entities/sensor.entity';

@Controller('sensor')
export class SensorController {
    constructor(private sensorService:SensorService){}
    
    @Patch("update")
    async updateValue(@Body()value:Partial<Sensor>){
        return await this.sensorService.updateOne(value)
    }
}
