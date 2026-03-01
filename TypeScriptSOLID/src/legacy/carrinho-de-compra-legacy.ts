type Produto = { nome: string; preco: number };
type OrdemDeStatus = 'open' | 'closed';

export class CarrinhoDeCompraLegacy {
  private readonly _items: Produto[] = [];
  private _ordemDeStatus: OrdemDeStatus = 'open';

  addItem(item: Produto): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Produto[]> {
    return this._items;
  }

  get ordemDeStatus(): OrdemDeStatus {
    return this._ordemDeStatus;
  }

  total(): number {
    return this._items.reduce((total, next) => total + next.preco, 0);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._ordemDeStatus = 'closed';
    this.mandarMensagem(`Seu pedido com total de ${this.total()} foi recebido`);
    this.salvarOrdem();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  mandarMensagem(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  salvarOrdem(): void {
    console.log('Pedido salvo com susseco...');
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }
}

const carrinhoDeCompra = new CarrinhoDeCompraLegacy();
carrinhoDeCompra.addItem({ nome: 'Camiseta', preco: 49.9 });
carrinhoDeCompra.addItem({ nome: 'Caderno', preco: 9.9 });
carrinhoDeCompra.addItem({ nome: 'Lápis', preco: 1.59 });

console.log(carrinhoDeCompra.items);
console.log(carrinhoDeCompra.total());
console.log(carrinhoDeCompra.ordemDeStatus);
carrinhoDeCompra.checkout();
console.log(carrinhoDeCompra.ordemDeStatus);
