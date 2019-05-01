import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponentComponent } from './search-component/search-component.component';

const routes: Routes = [
  {path: 'models', component: SearchComponentComponent},
  {path: '', redirectTo: '/models', pathMatch: 'full'},
  {path: '', redirectTo: '/models', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
