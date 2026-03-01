/*
Interface segregation principle ( Principio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam
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
import { CustomerEmpresarial, CustomerIndividual } from './classes/customer';

const cinquentaPorcentoDeDesconto = new CinquentaPorcentoDeDesconto();
const dezPorcentoDeDesconto = new DezPorcentoDeDesconto();
const semDeDesconto = new SemDesconto();
const carrinhoDeCompra = new CarrinhoDeCompra(semDeDesconto);
const menssagem = new Menssagem();
const persistencia = new Persistencia();
const customerindividual = new CustomerIndividual(
  'Rafael',
  'Tomé',
  '111.222.333-44',
);

// const customerEmpresarial = new CustomerEmpresarial('Nike', '111.222.222-44');

const ordem = new Ordem(
  carrinhoDeCompra,
  menssagem,
  persistencia,
  customerindividual,
);

carrinhoDeCompra.addItem(new Produto('Camiseta', 49.9));
carrinhoDeCompra.addItem(new Produto('Caderno', 9.9));
carrinhoDeCompra.addItem(new Produto('Lápis', 1.59));

console.log(carrinhoDeCompra.items);
console.log(carrinhoDeCompra.total());
console.log(carrinhoDeCompra.totalComDesconto());
console.log(ordem.ordemDeStatus);
ordem.checkout();
console.log(ordem.ordemDeStatus);
