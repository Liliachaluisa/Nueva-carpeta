import { Module } from '@nestjs/common';
import { PacienteModule } from './paciente/paciente.module';
import { SignoVitalModule } from './signo_vital/signo_vital.module';
import { ControlRealizadoModule } from './control_realizado/control_realizado.module';

@Module({
  imports: [PacienteModule, SignoVitalModule, ControlRealizadoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
