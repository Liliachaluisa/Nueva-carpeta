import { Injectable } from '@nestjs/common';
import { CreateControlRealizadoDto } from './dto/create-control_realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control_realizado.dto';
import { ControlRealizado } from './entities/control_realizado.entity';

@Injectable()
export class ControlRealizadoService {

  
  constructor(
    private readonly controlRealizado: Model<ControlRealizado>
  ){}

  create(createControlRealizadoDto: CreateControlRealizadoDto) {
    return this.controlRealizado.create(createControlRealizadoDto);
  }

  findAll():Promise<ControlRealizado[]> {
    const controles_realizados = this.controlRealizado.findAll()
    return controles_realizados
  }

  findOne(id: number):Promise<ControlRealizado> {
    const control_realizado = this.controlRealizado.findOne({where: { id }})
    if ( !control_realizado ) throw new Error (`Control realizador con id ${id} no encontrado`);
    return control_realizado;
  }
  
  
  update(id: number, updateControlRealizadoDto: UpdateControlRealizadoDto):Promise<ControlRealizado> {
    const control_realizado = this.findOne(updateControlRealizadoDto.id)
    const control_realizado_up = this.controlRealizado.update(updateControlRealizadoDto)
    control_realizado_up.save()
    return control_realizado_up
  }
  
  remove(id: number):Promise<ControlRealizado> {
    const control_realizado = this.findOne(id)
    control_realizado.detroy()
    return control_realizado
  }
}
