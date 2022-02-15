import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeBgDirective } from './change-bg.directive';
import { HomeComponent } from './Home/Home.component';
import { QuestionOneComponent } from './QuestionOne/QuestionOne.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'question',component:QuestionOneComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
