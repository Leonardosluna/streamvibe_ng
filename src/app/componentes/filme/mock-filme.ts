import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {

  alternarFavorito() {
    this.filme1.favorito = !this.filme1.favorito
  }

  filme1 = {
    nome: "A Origem",
    imagem: "/Aorigem.jpg",
    genero: "drama",
    sinopse: "Um grande sonhador que sonha dentro dos sonhos de quem ta sonhando",
    favorito: false
  }

  filme2 = {
    nome: "Interstellar",
    imagem: "/Interstellar.jpg",
    genero: "Ficção Científica, Aventura",
    sinopse:": Em um futuro sombrio na Terra, um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade",
    favorito: false
  }

  filme3 = {
    nome: "Blade Runner 2049",
    imagem: "/BladeRunner2049.jpg",
    genero: "Ficção Científica, Ação",
    sinopse:"Em um mundo de androides, um novo Blade Runner descobre um segredo que pode mudar o futuro da sociedade.",
    favorito: false
  }

  filme4 = {
    nome: "Matrix",
    imagem: "/Matrix.jpg",
    genero: "Ficção Científica, Ação",
    sinopse:"Um programador descobre que vive em uma realidade simulada e se une à resistência para libertar a humanidade.",
    favorito: false
  }

  filme5 = {
    nome: "Gravidade",
    imagem: "/Gravidade.jpg",
    genero: "Ficção Científica, Drama",
    sinopse:"Dois astronautas lutam pela sobrevivência no espaço após um acidente destruir sua nave.",
    favorito: false
  }
}
