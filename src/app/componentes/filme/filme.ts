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
    sinopse: "Um grande sonhador que sonha dentro dos sonhos de quem ta sonhando",
    favorito: false
  }

  // filme2 = {
  //   nome: "Batman: O Cavaleiro das Trevas",
  //   imagem: "/batman.jpg",
  //   sinopse: "Um maluco vestido de morcego desce a porrada num maluco vestido de palhaço"
  // }

  // filme3 = {
  //   nome: "Interstelar",
  //   imagem: "/Interstelar.jpg",
  //   sinopse: "Um grupo de malucos entra num buraco de minhoca"
  // }

}
