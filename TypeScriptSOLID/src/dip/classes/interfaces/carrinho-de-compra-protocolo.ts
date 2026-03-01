import { Produto } from '../produto';

export interface CarrinhoDeCompraProtocolo {
  items: Readonly<Produto[]>;
  addItem(item: Produto): void;
  removeItem(index: number): void;
  total(): number;
  totalComDesconto(): number;
  isEmpty(): boolean;
  clear(): void;
}
