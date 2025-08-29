import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { TableDropdownComponent } from '../../../common/table-dropdown/table-dropdown.component';
import { BadgeComponent } from '../../../ui/badge/badge.component';
import { ApiService } from '../../../../service/api-service/api.service';
import { Router } from '@angular/router';

interface Transaction {
  image: string;
  action: string;
  date: string;
  amount: string;
  category: string;
  status: "Success" | "Pending" | "Failed";
}

@Component({
  selector: 'app-basic-table-three',
  imports: [
    CommonModule,
    ButtonComponent,
    BadgeComponent,
  ],
  templateUrl: './basic-table-three.component.html',
  styles: ``
})
export class BasicTableThreeComponent {

  surveys: any[] = []
  totalSurveys = 0
  currentPage = 1;
  itemsPerPage = 5;
  pages: number = 0

  constructor(private apiService: ApiService, private router: Router) { }
  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.apiService.getAllSurveys(this.currentPage, this.itemsPerPage).subscribe(data => {
      this.surveys = data.surveys;
      this.totalSurveys = data.total;
      this.pages = data.pages
      console.log(data, "this surveys", this.totalSurveys);
    })
  }

  get totalPages(): number {
    return Math.ceil(this.pages);
  }

  get currentItems(): any[] {
    return this.surveys;
  }


  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchData();
    }
  }

  goToSurvey(survey_id: string) {
    this.router.navigate(['/profile'], { queryParams: { survey_id: survey_id ? survey_id : '' } });
  }

  handleViewMore(item: Transaction) {
    // logic here
    console.log('View More:', item);
  }

  handleDelete(item: Transaction) {
    // logic here
    console.log('Delete:', item);
  }

  getBadgeColor(status: string): 'success' | 'warning' | 'error' {
    if (status === 'Success') return 'success';
    if (status === 'Pending') return 'warning';
    return 'error';
  }
}
