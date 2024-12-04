import { Injectable } from '@nestjs/common';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero } from './entities/cocinero.entity';
import { CocineroController } from './cocinero.controller';

@Injectable()
export class CocineroService {

  constructor(
    @InjetModel(Cocinero)
    private readonly concineroServices: typeof Cocinero;
  ){}

  create(createCocineroDto: CreateCocineroDto):Promise<Cocinero> {
    return this.concineroServices.create(createCocineroDto)
  }

  findAll():Promise<Cocinero> {
    return this.concineroServices.findAll()
  }

  findOne(id: number):Promise<Cocinero> {
    const cocinero = this.concineroServices.findOne({ where: {id} })
    if ( ! cocinero ) throw new Error (`Cocinero con id ${id} no encontrado`)
    return cocinero;
    }

  update(id: number, updateCocineroDto: UpdateCocineroDto):Promise<Cocinero> {
    const cocinero = this.findOne(id)
    const cocinero_up = this.concineroServices.update(updateCocineroDto)
    return cocinero;
  }

  remove(id: number):Promise<Cocinero> {
    const cocinero = this.findOne(id);
    this.concineroServices.detroy(cocinero);
    return cocinero;
  }
}
