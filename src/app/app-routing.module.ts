import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';
import { ResetPasswordPage } from './reset-password/reset-password.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./perfil/perfil.module').then((m) => m.PerfilPageModule),
    canActivate: [authGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorPageModule),
  },
  
  {
    path: 'reset-password',
    component: ResetPasswordPage, 
  },
  {
    path: '**',
    redirectTo: 'error',
  },  {
    path: 'piloto',
    loadChildren: () => import('./piloto/piloto.module').then( m => m.PilotoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
