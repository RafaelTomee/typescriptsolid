import { CarrinhoDeCompra } from './entidades/carrinho-de-compra';
import { Menssagem } from './serviços/menssagem';
import { Ordem } from './entidades/ordem';
import { Persistencia } from './serviços/persistencia';
import { Produto } from './entidades/produto';

const carrinhoDeCompra = new CarrinhoDeCompra();
const menssagem = new Menssagem();
const persistencia = new Persistencia();
const ordem = new Ordem(carrinhoDeCompra, menssagem, persistencia);

carrinhoDeCompra.addItem(new Produto('Camiseta', 49.9));
carrinhoDeCompra.addItem(new Produto('Caderno', 9.9));
carrinhoDeCompra.addItem(new Produto('Lápis', 1.59));

console.log(carrinhoDeCompra.items);
console.log(carrinhoDeCompra.total());
console.log(ordem.ordemDeStatus);
ordem.checkout();
console.log(ordem.ordemDeStatus);
