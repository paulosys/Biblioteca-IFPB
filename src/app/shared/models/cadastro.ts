export class Cadastro {
  constructor(
    public nome: string,
    public sobrenome: string,
    public matricula: string,
    public endereco: string,
    public telefone: string,
    public email: string,
    public cpf: string,
    public senha: string,
    public confirmar_senha: string
  ) {}
}
