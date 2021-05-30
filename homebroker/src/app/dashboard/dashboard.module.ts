import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DahsboardPageComponent } from './dahsboard-page/dahsboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DahsboardPageComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],

})
export class DashboardModule { }
