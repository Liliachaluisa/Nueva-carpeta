import { Injectable } from '@nestjs/common';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';
import { Preparacion } from './entities/preparacion.entity';
import { RecetaModule } from 'src/receta/receta.module';

@Injectable()
export class PreparacionService {

  constructor(
    private readonly preparacionServices: typeof Preparacion;
  ){}

  create(createPreparacionDto: CreatePreparacionDto) {
    return this.preparacionServices.create(createPreparacionDto);
  }

  findAll():Promise<Preparacion> {
    return this.preparacionServices.findAll()
  }

  findOne(id: number) {
    const preparacion = this.preparacionServices.findOne({ where: {id} })
  }

  update(id: number, updatePreparacionDto: UpdatePreparacionDto):Promise<Preparacion> {
    this.findOne(id)
    const preparacion_up = this.preparacionServices.update(updatePreparacionDto);
    return preparacion_up;
  }

  remove(id: number) {
    const preparacion = this.findOne(id);
    this.preparacionServices.detroy(preparacion)
    return preparacion;
  }
}
