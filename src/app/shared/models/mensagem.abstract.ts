export abstract class MensagemAbstract {
  abstract sucesso(mensagem: string, callback: () => void): void;
  abstract deletar(mensagem: string, callback: () => void): void;
  abstract alerta(mensagem: string, callback: () => void): void;
}
