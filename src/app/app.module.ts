import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { NavheaderComponent } from '../pages/navheader/navheader.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { LoginComponent } from '../pages/login/login.component';
import { DocumentationComponent } from '../pages/documentation/documentation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavheaderComponent,
    FooterComponent,
    LoginComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
			{
				path: '',
				component: HomeComponent
      },
      {
        path: 'doc',
        component: DocumentationComponent
      },
			{
				path: 'loginform',
				component: LoginComponent
			},
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
