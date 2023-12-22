import { Component, Input} from '@angular/core';
import { GestionNoticiasService } from '../../services/gestion-noticias.service';
import { INoticia } from 'src/app/interfaces/mis-interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {
  @Input() noticia?: INoticia;
  public botones = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alerta ignorada');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.gestionNoticias.eliminarNoticia(this.noticia);
        console.log('Noticia eliminada');
      },
    },
  ];

  constructor(public gestionNoticias: GestionNoticiasService) { }

}
