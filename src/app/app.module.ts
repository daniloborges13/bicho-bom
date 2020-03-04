import { DoacaoProvider } from './services/doacao/doacao';
import { RegistrarperdidosPageModule } from './pages/registrarperdidos/registrarperdidos.module';
import { DoacaoPageModule } from './pages/doacao/doacao.module';
import { CadastroPageModule } from './pages/cadastro/cadastro.module';
import { LoginPageModule } from './pages/login/login.module';
import { AngularFireAuth } from '@angular/fire/auth';
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
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RedefinirSenhaPageModule } from './pages/redefinir-senha/redefinir-senha.module';
import { firebaseConfig } from './services/firebase/firebase';

import { IonicStorageModule } from '@ionic/storage';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import {AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PerdidosProvider } from './services/perdidos/perdidos';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule,
     CadastroPageModule,
     LoginPageModule,
     RedefinirSenhaPageModule,
     DoacaoPageModule,
     RegistrarperdidosPageModule,
     IonicStorageModule.forRoot(),
     AngularFireStorageModule,
     AngularFireDatabaseModule,
     AngularFirestoreModule.enablePersistence()
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth, Camera, File, WebView, DoacaoProvider, PerdidosProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
