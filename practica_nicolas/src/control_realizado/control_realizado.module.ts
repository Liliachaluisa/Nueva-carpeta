import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './control_realizado.service';
import { ControlRealizadoController } from './control_realizado.controller';
import { ControlRealizado } from './entities/control_realizado.entity';


@Module({
  import: [ TypeOrmModule.([ControlRealizado])],
  export: [ TypeOrmMOdule ]
  controllers: [ControlRealizadoController],
  providers: [ControlRealizadoService],
})
export class ControlRealizadoModule {}
