// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-recent-orders',
//   imports: [CommonModule],
//   templateUrl: './recent-orders.component.html',
//   styleUrl: './recent-orders.component.css'
// })
// export class RecentOrdersComponent {

// }


import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
// import { TableComponent } from '../../ui/table/table.component';
// import { TableBodyComponent } from '../../ui/table/table-body.component';
// import { TableCellComponent } from '../../ui/table/table-cell.component';
// import { TableHeaderComponent } from '../../ui/table/table-header.component';
// import { TableRowComponent } from '../../ui/table/table-row.component';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  variants: string;
  category: string;
  price: string;
  image: string;
  status: 'Delivered' | 'Pending' | 'Canceled';
}

@Component({
  selector: 'app-recent-orders',
  imports: [
    CommonModule,
    // TableComponent,
    // TableBodyComponent,
    // TableCellComponent,
    // TableHeaderComponent,
    // TableRowComponent,
    BadgeComponent,
  ],
  templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent implements OnInit {
  @Input() tableData: any[] = [];
  loading:boolean=false;

  constructor(private router: Router) { }

  ngOnInit() { }

  getBadgeColor(status: string): 'success' | 'warning' | 'error' {
    if (status === 'chatgpt') return 'success';
    if (status === 'Pending') return 'warning';
    return 'error';
  }

  navigateTo() {
    console.log(this.tableData, "this table  ");
    this.router.navigate(['/basic-tables']);
  }

  goToSurvey(suId: string) {
    this.router.navigate(['/profile'], { queryParams: { id: suId } });
    this.loading=false;
  }

}