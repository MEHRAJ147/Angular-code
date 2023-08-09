import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGINComponent } from './login/login.component';
import { HOMEComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LOGINComponent },
  { path: 'home', component: HOMEComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
