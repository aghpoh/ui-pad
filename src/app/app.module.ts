import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {routes} from './app.routes';
import {HomeModule} from './modules/home/home.module';
import {MatButtonModule, MatFormFieldModule, MatPaginatorModule} from '@angular/material';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
    routes,
    HomeModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule
    // AuthModule,
    // QuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
