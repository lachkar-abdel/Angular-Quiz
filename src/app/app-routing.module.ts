import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangeBgDirective } from './change-bg.directive';
import { HomeComponent } from './Home/Home.component';
import { FilierComponent } from './filier/filier.component';
import { QuestionOneComponent } from './QuestionOne/QuestionOne.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'question',component:QuestionOneComponent},
  // {path:'home',component:HomeComponent},
  {path:'home',component:FilierComponent}
  // {path:'questionone',component:QuestionOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
