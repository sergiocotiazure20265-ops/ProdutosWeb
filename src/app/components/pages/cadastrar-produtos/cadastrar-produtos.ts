import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cadastrar-produtos',
  styleUrl: './cadastrar-produtos.css',
  templateUrl: './cadastrar-produtos.html',
})
export class CadastrarProdutos {

  //injeção de dependência
  private http = inject(HttpClient);

  //Método executado quando o componente é inicializado
  ngOnInit() {
    //Fazendo uma requisição para a API
    this.http.get('http://localhost:5097/api/v1/categorias')
      .subscribe((data) => {
        console.table(data);
      });
  }

}
