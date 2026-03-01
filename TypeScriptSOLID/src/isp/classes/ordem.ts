import { CarrinhoDeCompra } from './carrinho-de-compra';
import { OrdemDeStatus } from './interfaces/ordem-de-status';
import { Menssagem } from '../serviços/menssagem';
import { Persistencia } from '../serviços/persistencia';
import { CustomerDaOrdem } from './interfaces/protocolo-customer';

export class Ordem {
  private _ordemDeStatus: OrdemDeStatus = 'open';

  constructor(
    private readonly carrinho: CarrinhoDeCompra,
    private readonly menssagem: Menssagem,
    private readonly persistencia: Persistencia,
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
