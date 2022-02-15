import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { HomeComponent } from './Home/Home.component';
import { QuestionOneComponent } from './QuestionOne/QuestionOne.component';

@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
    ChangeBgDirective,
      HomeComponent,
      QuestionOneComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
