import { MenssagemProtocolo } from '../classes/interfaces/menssagem-protocolo';

export class Menssagem implements MenssagemProtocolo {
  mandarMensagem(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
