import { PersistenciaProtocolo } from '../classes/interfaces/persistencia-protocolo';

export class Persistencia implements PersistenciaProtocolo {
  salvarOrdem(): void {
    console.log('Pedido salvo com susseco...');
  }
}
