import { Desconto } from './desconto';
import { Produto } from './interfaces/produto';

export class CarrinhoDeCompra {
  private readonly _items: Produto[] = [];

  constructor(private readonly desconto: Desconto) {}

  addItem(item: Produto): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Produto[]> {
    return this._items;
  }

  total(): number {
    return this._items.reduce((total, next) => total + next.preco, 0);
  }

  totalComDesconto(): number {
    return this.desconto.calcular(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }
}
