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


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     AngularFireModule.initializeApp({
      apiKey: "AIzaSyBklUWBRPTL-ROMd2DX0QiDHWCZPKqf5Fk",
      authDomain: "bichobom-danilo.firebaseapp.com",
      databaseURL: "https://bichobom-danilo.firebaseio.com",
      projectId: "bichobom-danilo",
      storageBucket: "bichobom-danilo.appspot.com",
      messagingSenderId: "6341201958",
      appId: "1:6341201958:web:4122e70edf757cc9"
     }),
     AngularFirestoreModule,
     AngularFireDatabaseModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
