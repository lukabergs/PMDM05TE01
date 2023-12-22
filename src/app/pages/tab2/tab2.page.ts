import { Component } from '@angular/core';
import { GestionNoticiasService } from '../../services/gestion-noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public gestionNoticias: GestionNoticiasService) {}

}
