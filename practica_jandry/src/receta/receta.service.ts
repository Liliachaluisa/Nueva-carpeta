import { Injectable } from '@nestjs/common';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Receta } from './entities/receta.entity';

@Injectable()
export class RecetaService {

  constructor(
    private readonly recetaServices: typeof Receta;
  ){}

  create(createRecetaDto: CreateRecetaDto) {
    return this.recetaServices.create(createRecetaDto)
  }

  findAll() {
    return this.recetaServices.findAll()
  }

  findOne(id: number) {
    const receta = this.recetaServices.findOne({ where: {id} })
    if ( !receta ) throw new Error ( `Receta con id ${id} no encontrada` ) 
    return receta;
  }

  update(id: number, updateRecetaDto: UpdateRecetaDto) {
    this.findOne(id);
    return this.recetaServices.update(updateRecetaDto);
     
  }

  remove(id: number) {
    const receta = this.findOne(id);
    this.recetaServices.detroy({where: {id}})
    return receta;
  }

}
