import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from 'app/modules/home/pages/home.page';
import {AddCustomerPageComponent} from './add-customer-page/add-customer-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddCustomerPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'add/:id',
    component: AddCustomerPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
