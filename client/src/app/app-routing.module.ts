import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewContactComponent } from './components/contancts/overview/overview.contact.component';
import { ViewContactComponent } from './components/contancts/view/view.contact.component';
import { FillContactComponent } from './components/contancts/fillcontact/fillcontact.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: OverviewContactComponent
  },
  {
    path: 'fillcontact',
    component: FillContactComponent
  },
  {
    path: 'editcontact/:id',
    component: FillContactComponent
  },
  {
    path: 'viewcontact/:id',
    component: ViewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
