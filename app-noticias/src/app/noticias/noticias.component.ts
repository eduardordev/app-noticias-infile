import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { TarjetaNoticiaComponent } from '../tarjeta-noticia/tarjeta-noticia.component';
import { Noticia } from '../noticia';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, TarjetaNoticiaComponent],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticiasList: Noticia[] = [];

  constructor(private noticiaService: NoticiasService) {}

  ngOnInit(): void {
    this.loadNoticias();
  }

  async loadNoticias(): Promise<void> {
    try {
      this.noticiasList = await this.noticiaService.getAllNoticias();
    } catch (err) {
      console.error('Error al cargar las noticias:', err);
    }
  }
}
