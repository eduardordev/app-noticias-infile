import {Routes} from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalleNoticiasComponent } from './detalle-noticias/detalle-noticias.component';

const routeConfig: Routes = [
  {
    path: '',
    component: NoticiasComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetalleNoticiasComponent,
    title: 'Detalle',
  },
];
export default routeConfig;
