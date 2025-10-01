import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ConsultantList } from './components/consultant-list/consultant-list';
import { LoginComponent } from './components/login/login';
import { AboutComponent } from './components/about/about';
import { ConsultantFormComponent } from './components/consultant-form/consultant-form';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/consultants',
    pathMatch: 'full'
  },
  {
    path: 'consultants',
    component: ConsultantList,
    title: 'Consultores'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Sobre'
  },
  {
    path: 'consultant-form',
    component: ConsultantFormComponent,
    title: 'Adicionar Consultor'
  },
  {
    path: 'consultant-form/:id',
    component: ConsultantFormComponent,
    title: 'Editar Consultor'
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    AuthService
  ]
};