import { Produto } from './interfaces/produto';

export class CarrinhoDeCompra {
  private readonly _items: Produto[] = [];

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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }
}
