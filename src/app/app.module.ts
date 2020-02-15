import { CadastroPageModule } from './pages/cadastro/cadastro.module';
import { LoginPageModule } from './pages/login/login.module';
import { RedefinirSenhaPage } from './pages/redefinir-senha/redefinir-senha.page';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RedefinirSenhaPageModule } from './pages/redefinir-senha/redefinir-senha.module';
import { firebaseConfig } from './services/firebase/firebase';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule,
     AngularFireDatabaseModule,
     CadastroPageModule,
     LoginPageModule,
     RedefinirSenhaPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth,
    CadastroPage,
    RedefinirSenhaPage

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
