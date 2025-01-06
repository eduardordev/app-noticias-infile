import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Noticia } from '../noticia';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-noticias-recomendadas',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './noticias-recomendadas.component.html',
  styleUrl: './noticias-recomendadas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasRecomendadasComponent {
  @Input() noticia!: Noticia;
}
