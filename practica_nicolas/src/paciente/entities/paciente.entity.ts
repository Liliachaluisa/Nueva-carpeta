import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'pacientes',
  timestamps: false,
})
export class Paciente extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  identificacion: string;
}
