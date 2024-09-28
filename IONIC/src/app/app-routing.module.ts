import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';

const redireccionarLogin = () => redirectUnauthorizedTo('/login');

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin},
    loadChildren: () => import('./page/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./page/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./page/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },  {
    path: 'cuenta',
    loadChildren: () => import('./page/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./page/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
