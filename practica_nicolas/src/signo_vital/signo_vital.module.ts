import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo_vital.service';
import { SignoVitalController } from './signo_vital.controller';

@Module({
  controllers: [SignoVitalController],
  providers: [SignoVitalService],
})
export class SignoVitalModule {}
