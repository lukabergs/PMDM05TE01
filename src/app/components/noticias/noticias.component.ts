import { Component, OnInit } from '@angular/core';
import { GestionNoticiasService } from '../../services/gestion-noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent {

  constructor(public gestionNoticias: GestionNoticiasService) { }

}
