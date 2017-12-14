import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from 'app/modules/home/home.routes';
import {HomePageComponent} from './pages/home.page';
import {AddCustomerPageComponent} from 'app/modules/home/add-customer-page/add-customer-page.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HomeService} from './home.service';
import {ApiService} from '../../core/services/api.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    routing,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    HomePageComponent,
    AddCustomerPageComponent
  ],
  providers: [
    HomeService,
    ApiService
  ]
})
export class HomeModule {
}
