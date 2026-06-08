export class Contato {

  constructor(
    private nome: string,
    private telefone: string,
    private email: string,
    private aniversario: string,
    private tipo: string
  ) {}

  getNome(): string {
    return this.nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getEmail(): string {
    return this.email;
  }

  getAniversario(): string {
    return this.aniversario;
  }

  getTipo(): string {
    return this.tipo;
  }

}