import { RedefinirSenhaPage } from './pages/redefinir-senha/redefinir-senha.page';
import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./pages/redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'doacao',
    loadChildren: () => import('./pages/doacao/doacao.module').then( m => m.DoacaoPageModule)
  },
  {
    path: 'registrarperdidos',
    loadChildren: () => import('./pages/registrarperdidos/registrarperdidos.module').then( m => m.RegistrarperdidosPageModule)
  },  {
    path: 'adote',
    loadChildren: () => import('./pages/adote/adote.module').then( m => m.AdotePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
