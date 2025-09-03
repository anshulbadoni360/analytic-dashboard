import { Component, OnInit } from '@angular/core';
import { EcommerceMetricsComponent } from '../../../shared/components/ecommerce/ecommerce-metrics/ecommerce-metrics.component';
import { MonthlySalesChartComponent } from '../../../shared/components/ecommerce/monthly-sales-chart/monthly-sales-chart.component';
import { MonthlyTargetComponent } from '../../../shared/components/ecommerce/monthly-target/monthly-target.component';
import { StatisticsChartComponent } from '../../../shared/components/ecommerce/statics-chart/statics-chart.component';
import { DemographicCardComponent } from '../../../shared/components/ecommerce/demographic-card/demographic-card.component';
import { RecentOrdersComponent } from '../../../shared/components/ecommerce/recent-orders/recent-orders.component';
import { ApiService } from '../../../shared/service/api-service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecommerce',
  imports: [
    EcommerceMetricsComponent,
    MonthlySalesChartComponent,
    MonthlyTargetComponent,
    StatisticsChartComponent,
    DemographicCardComponent,
    RecentOrdersComponent,
    CommonModule
  ],
  templateUrl: './ecommerce.component.html',
})
export class EcommerceComponent implements OnInit {

  surveys: any[] = [];
  totalSurveys: number = 0;
  loading:boolean=false;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loading=true;
    this.apiService.getAllSurveys().subscribe(data => {
      this.loading=false;
      this.surveys = data.surveys;
      this.totalSurveys = data.total;
    });
  }

}
