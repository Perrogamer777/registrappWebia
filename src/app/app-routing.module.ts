import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, CanActivate, Routes } from '@angular/router';
import { ProtegidoGuard } from './guards/protegido.guard';
import { NoAutorizadoGuard } from './guards/no-autorizado.guard';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    //canActivate:[ProtegidoGuard]
  },
  {
    path: 'registro-user',
    loadChildren: () => import('./registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'registro-horario',
    loadChildren: () => import('./registro-horario/registro-horario.module').then( m => m.RegistroHorarioPageModule)
  },
  {
    path: '**',
    component: NotFoundPage,
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'vista-api',
    loadChildren: () => import('./vista-api/vista-api.module').then( m => m.VistaApiPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
