export class Sala {
  constructor(
    public tipo_sala: number,
    public ocupada: boolean,
    public nome: string,
    public id?: string
  ) {}
}
