import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponentComponent } from './search-component/search-component.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

const routes: Routes = [
  {path: 'about', component: AboutpageComponent},
  {path: 'a', redirectTo: '/about', pathMatch: 'prefix'},
  {path: 'ab', redirectTo: '/about', pathMatch: 'prefix'},
  {path: 'abo', redirectTo: '/about', pathMatch: 'prefix'},
  {path: 'abou', redirectTo: '/about', pathMatch: 'prefix'},
  {path: 'about', redirectTo: '/about', pathMatch: 'prefix'},
  {path: 'models', component: SearchComponentComponent},
  {path: '', redirectTo: '/models', pathMatch: 'full'},
  {path: '', redirectTo: '/models', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
