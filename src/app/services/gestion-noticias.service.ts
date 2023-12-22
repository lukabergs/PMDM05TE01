import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INoticia, INoticias } from '../interfaces/mis-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {
  private noticias: INoticias;
  private noticiasSeleccionadas: INoticia[] = [];

  constructor(private leerFichero: HttpClient) {
    this.getNoticiasFichero();
  }

  getNoticias() {
    return this.noticias.articles;
  }

  getNoticiasSeleccionadas () {
    return this.noticiasSeleccionadas;
  }

  getNoticiasFichero() {
    let datosFichero: Observable<INoticias>;

    datosFichero = this.leerFichero.get<INoticias>("./assets/datos/articulos.json");

    datosFichero.subscribe(datos => {
      console.log(datos);
      this.noticias = datos;
    });
  }

  seleccionarNoticia(noticia: INoticia) {
    if (!noticia.checked) {
      noticia.checked = true;
      this.noticiasSeleccionadas.push(noticia);
    } else {
      this.eliminarNoticia(noticia);
    }
  }

  eliminarNoticia(noticia: INoticia) {
    for (let i = 0; i < this.noticiasSeleccionadas.length; i++) {
      if (this.noticiasSeleccionadas[i].url == noticia.url) {
        noticia.checked = false;
        this.noticiasSeleccionadas.splice(i,1);
      }
    }
  }
}
