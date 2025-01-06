import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service';
import { Noticia } from '../noticia';
import { CommonModule, Location } from '@angular/common';
import { NoticiasRecomendadasComponent } from "../noticias-recomendadas/noticias-recomendadas.component";

@Component({
  selector: 'app-detalle-noticias',
  imports: [CommonModule, NoticiasRecomendadasComponent],
  templateUrl: './detalle-noticias.component.html',
  styleUrls: ['./detalle-noticias.component.scss']
})
export class DetalleNoticiasComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  noticiasService = inject(NoticiasService);
  location = inject(Location);
  noticia: Noticia | undefined;
  noticiasRecomendadas: Noticia[] = [];

  constructor() {}

  ngOnInit(): void {
    const noticiaId = Number(this.route.snapshot.params['id']); 
    this.loadNoticia(noticiaId);
    this.loadNoticiasRecomendadas(noticiaId);
  }

  async loadNoticia(noticiaId: number): Promise<void> {
    try {
      this.noticia = await this.noticiasService.getNoticiaById(noticiaId);
    } catch (err) {
      console.error('Error al obtener la noticia:', err);
    }
  }

  async loadNoticiasRecomendadas(noticiaId: number): Promise<void> {
    try {
      this.noticiasRecomendadas = await this.noticiasService.getNoticiasRecomendadas(noticiaId);  // Pasamos el ID a las noticias recomendadas
    } catch (err) {
      console.error('Error al obtener las noticias recomendadas:', err);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
