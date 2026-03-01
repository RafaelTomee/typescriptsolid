import {
  CustomerDaOrdem,
  CustomerEmpresarialProtocolo,
  CustomerIndividualProtocolo,
} from './interfaces/protocolo-customer';

export class CustomerIndividual
  implements CustomerIndividualProtocolo, CustomerDaOrdem
{
  primeiroNome: string;
  sobrenome: string;
  cpf: string;

  constructor(primeiroNome: string, sobrenome: string, cpf: string) {
    this.primeiroNome = primeiroNome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
  }

  getName(): string {
    return this.primeiroNome + ' ' + this.sobrenome;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class CustomerEmpresarial
  implements CustomerEmpresarialProtocolo, CustomerDaOrdem
{
  nome: string;
  cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.nome;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
