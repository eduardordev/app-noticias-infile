import { Injectable } from '@angular/core';
import { Noticia } from './noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  readonly baseUrl: string = 'https://angular.dev/assets/images/tutorials/common';
  private apiUrl: string = 'http://localhost:9091/api/news'; // URL de tu API Spring

  noticiasList: Noticia[] = [];

  constructor() {}

  async loadNoticias(): Promise<void> {
    try {
      const noticias = await this.getAllNoticias();
      this.noticiasList = noticias;
    } catch (err) {
      console.error('Error al obtener las noticias:', err);
    }
  }

  async getAllNoticias(): Promise<Noticia[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status} - ${response.statusText}`);
      }
      const data: Noticia[] = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getNoticiaById(id: number): Promise<Noticia> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status} - ${response.statusText}`);
      }
      const data: Noticia = await response.json();
      return data;
    } catch (error) {

      throw error;
    }
  }

  async getNoticiasRecomendadas(noticiaId: number): Promise<Noticia[]> {
    try {
      // Hacer la solicitud para obtener las noticias recomendadas
      const response = await fetch(`${this.apiUrl}/${noticiaId}/recommended`);

      // Asegúrate de que la respuesta sea exitosa
      if (!response.ok) {
        throw new Error('Error al obtener noticias recomendadas');
      }

      // Convertir la respuesta a JSON
      const noticiasRecomendadas: Noticia[] = await response.json();

      // Devuelve las primeras 3 noticias
      return noticiasRecomendadas.slice(0, 3);
    } catch (error) {
      console.error('Error al obtener noticias recomendadas:', error);
      return [];
    }
  }


}
