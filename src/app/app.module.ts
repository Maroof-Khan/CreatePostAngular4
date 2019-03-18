import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { QuillModule } from 'ngx-quill';
// import { ImageResize } from 'quill-image-resize-module';
import { AgmCoreModule } from '@agm/core';
import {environment} from './../environments/environment';

import {CreatpostService} from './creatpost.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { LoginComponent } from './login/login.component';
import { ShowMapComponent } from './show-map/show-map.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreatepostComponent,
    LoginComponent,
    ShowMapComponent
    
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'your_apiKey'
    }),
    AngularFireModule.initializeApp(environment.firebase),
     RouterModule.forRoot([
         {path:'',component:HomeComponent},
         {path:'login', component:LoginComponent},
         {path:'createpost', component:CreatepostComponent}
       ]),
     QuillModule,
    AngularFireDatabaseModule,
    FormsModule,
    BrowserModule,
    AngularFireAuthModule
    // ImageResize
  ],
  providers: [CreatpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
