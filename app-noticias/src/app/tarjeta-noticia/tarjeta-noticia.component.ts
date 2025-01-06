import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Noticia } from '../noticia';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-tarjeta-noticia',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './tarjeta-noticia.component.html',
  styleUrl: './tarjeta-noticia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarjetaNoticiaComponent {
  @Input() noticia!: Noticia;
}
