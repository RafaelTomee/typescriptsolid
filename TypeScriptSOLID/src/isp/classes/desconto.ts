export abstract class Desconto {
  protected desconto = 0;

  calcular(preco: number): number {
    return preco - preco * this.desconto;
  }
}

export class CinquentaPorcentoDeDesconto extends Desconto {
  protected readonly desconto = 0.5;
}

export class DezPorcentoDeDesconto extends Desconto {
  protected readonly desconto = 0.1;
}
export class SemDesconto extends Desconto {}
