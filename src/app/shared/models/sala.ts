
export class Sala {
    constructor(
      public data_agendada: Date,
      public horario_inicial: string, // 
      public horario_final: string,
      public tipo_sala: string,
      public id?: number
    ) {}
  }
  