import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller()
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @MessagePattern('createPaciente')
  create(@Payload() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @MessagePattern('findAllPaciente')
  findAll() {
    return this.pacienteService.findAll();
  }

  @MessagePattern('findOnePaciente')
  findOne(@Payload() id: number) {
    return this.pacienteService.findOne(id);
  }

  @MessagePattern('updatePaciente')
  update(@Payload() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(updatePacienteDto.id, updatePacienteDto);
  }

  @MessagePattern('removePaciente')
  remove(@Payload() id: number) {
    return this.pacienteService.remove(id);
  }
}
