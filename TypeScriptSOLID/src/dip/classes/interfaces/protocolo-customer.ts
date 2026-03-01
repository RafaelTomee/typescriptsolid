export interface CustomerDaOrdem {
  getName(): string;
  getIDN(): string;
}

export interface CustomerIndividualProtocolo {
  primeiroNome: string;
  sobrenome: string;
  cpf: string;
}

export interface CustomerEmpresarialProtocolo {
  nome: string;
  cnpj: string;
}
