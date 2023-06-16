export class Horario {
  constructor(
    public data_agendada: Date,
    public horario_inicial: string,
    public horario_final: string,
    public id?: string
  ) {}
}
