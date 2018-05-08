import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhoneVerificationPage } from '../pages/phone-verification/phone-verification';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {OtpPage} from "../pages/otp/otp";


const firebaseConfig = {
  apiKey: "AIzaSyCHtYjPsrymbWWfcpKTuIgGYmci8sEmlVo",
  authDomain: "authexample-88a93.firebaseapp.com",
  databaseURL: "https://authexample-88a93.firebaseio.com",
  projectId: "authexample-88a93",
  storageBucket: "authexample-88a93.appspot.com",
  messagingSenderId: "492940167428"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhoneVerificationPage,
    OtpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhoneVerificationPage,
    OtpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
