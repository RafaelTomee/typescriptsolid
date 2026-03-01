/*
Open/Closed principle
Entidades devem estar abertas para extensão, mas fechadas para modificação.
*/
import { CarrinhoDeCompra } from './classes/carrinho-de-compra';
import { Menssagem } from './serviços/menssagem';
import { Ordem } from './classes/ordem';
import { Persistencia } from './serviços/persistencia';
import { Produto } from './classes/produto';
import {
  CinquentaPorcentoDeDesconto,
  DezPorcentoDeDesconto,
  SemDesconto,
} from './classes/desconto';

const cinquentaPorcentoDeDesconto = new CinquentaPorcentoDeDesconto();
const dezPorcentoDeDesconto = new DezPorcentoDeDesconto();
const semDeDesconto = new SemDesconto();
const carrinhoDeCompra = new CarrinhoDeCompra(semDeDesconto);
const menssagem = new Menssagem();
const persistencia = new Persistencia();
const ordem = new Ordem(carrinhoDeCompra, menssagem, persistencia);

carrinhoDeCompra.addItem(new Produto('Camiseta', 49.9));
carrinhoDeCompra.addItem(new Produto('Caderno', 9.9));
carrinhoDeCompra.addItem(new Produto('Lápis', 1.59));

console.log(carrinhoDeCompra.items);
console.log(carrinhoDeCompra.total());
console.log(carrinhoDeCompra.totalComDesconto());
console.log(ordem.ordemDeStatus);
ordem.checkout();
console.log(ordem.ordemDeStatus);
