import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

import Stock from 'src/app/shared/Models/StockModel';

@Component({
  selector: 'app-dahsboard-page',
  templateUrl: './dahsboard-page.component.html',
  styleUrls: ['./dahsboard-page.component.css']
})
export class DahsboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { } 

  ngOnInit(): void {
    this.fetchStocks();
   }


  async fetchStocks(): Promise<void> {

    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);

  }

}
