import { NgModule, Sanitizer } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./pages/redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'doacao',
    loadChildren: () => import('./pages/doacao/doacao.module').then( m => m.DoacaoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registrarperdidos',
    loadChildren: () => import('./pages/registrarperdidos/registrarperdidos.module').then( m => m.RegistrarperdidosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'adote',
    loadChildren: () => import('./pages/adote/adote.module').then( m => m.AdotePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'procurarperdidos',
    loadChildren: () => import('./pages/procurarperdidos/procurarperdidos.module').then( m => m.ProcurarperdidosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'minhaspub',
    loadChildren: () => import('./pages/minhaspub/minhaspub.module').then( m => m.MinhaspubPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mypubs',
    loadChildren: () => import('./pages/mypubs/mypubs.module').then( m => m.MypubsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'myanimalperdido',
    loadChildren: () => import('./pages/myanimalperdido/myanimalperdido.module').then( m => m.MyanimalperdidoPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
