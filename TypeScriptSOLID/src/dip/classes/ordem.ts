import { OrdemDeStatus } from './interfaces/ordem-de-status';
import { CustomerDaOrdem } from './interfaces/protocolo-customer';
import { CarrinhoDeCompraProtocolo } from './interfaces/carrinho-de-compra-protocolo';
import { MenssagemProtocolo } from './interfaces/menssagem-protocolo';
import { PersistenciaProtocolo } from './interfaces/persistencia-protocolo';

export class Ordem {
  private _ordemDeStatus: OrdemDeStatus = 'open';

  constructor(
    private readonly carrinho: CarrinhoDeCompraProtocolo,
    private readonly menssagem: MenssagemProtocolo,
    private readonly persistencia: PersistenciaProtocolo,
    private readonly customer: CustomerDaOrdem,
  ) {}

  get ordemDeStatus(): OrdemDeStatus {
    return this._ordemDeStatus;
  }

  checkout(): void {
    if (this.carrinho.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._ordemDeStatus = 'closed';
    this.menssagem.mandarMensagem(
      `Seu pedido com total de ${this.carrinho.totalComDesconto()} foi recebido`,
    );
    this.persistencia.salvarOrdem();
    this.carrinho.clear();

    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
