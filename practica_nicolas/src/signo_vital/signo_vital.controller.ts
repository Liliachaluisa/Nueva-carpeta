import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SignoVitalService } from './signo_vital.service';
import { CreateSignoVitalDto } from './dto/create-signo_vital.dto';
import { UpdateSignoVitalDto } from './dto/update-signo_vital.dto';

@Controller()
export class SignoVitalController {
  constructor(private readonly signoVitalService: SignoVitalService) {}

  @MessagePattern('createSignoVital')
  create(@Payload() createSignoVitalDto: CreateSignoVitalDto) {
    return this.signoVitalService.create(createSignoVitalDto);
  }

  @MessagePattern('findAllSignoVital')
  findAll() {
    return this.signoVitalService.findAll();
  }

  @MessagePattern('findOneSignoVital')
  findOne(@Payload() id: number) {
    return this.signoVitalService.findOne(id);
  }

  @MessagePattern('updateSignoVital')
  update(@Payload() updateSignoVitalDto: UpdateSignoVitalDto) {
    return this.signoVitalService.update(updateSignoVitalDto.id, updateSignoVitalDto);
  }

  @MessagePattern('removeSignoVital')
  remove(@Payload() id: number) {
    return this.signoVitalService.remove(id);
  }
}
