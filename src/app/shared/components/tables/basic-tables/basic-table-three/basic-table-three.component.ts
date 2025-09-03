import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { TableDropdownComponent } from '../../../common/table-dropdown/table-dropdown.component';
import { BadgeComponent } from '../../../ui/badge/badge.component';
import { ApiService } from '../../../../service/api-service/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  templateUrl: './basic-table-three.component.html',
  styles: ``
})
export class BasicTableThreeComponent {

  surveys: any[] = []
  totalSurveys = 0
  currentPage = 1;
  itemsPerPage = 10;
  pages: number = 0
  loading: boolean = false;
  search: string = '';
  filteredsurveys: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }
  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.loading = true;
    this.apiService.getAllSurveys(this.currentPage, this.itemsPerPage).subscribe(data => {
      this.loading = false;
      this.surveys = data.surveys;
      this.totalSurveys = data.total;
      this.pages = data.pages
      this.filteredsurveys = data.surveys
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
  searchButton() {
    this.loading = true;
    if (this.search === '') {
      this.loading = false;
      this.fetchData()
    } else {
      this.loading = false;
    }
    this.filteredsurveys = this.surveys.filter((survey: any) => survey.title.toLowerCase().includes(this.search.toLowerCase()));
    console.log(this.filteredsurveys, "this filteredsurveys");
    console.log(this.search, "this search");
  }
  getFilteredSurveys(): any {
    return this.filteredsurveys;
  }

  searchis(){
    console.log(this.search,"daw");
    this.filteredsurveys = this.surveys.filter((survey: any) => survey.title.toLowerCase().includes(this.search.toLowerCase()));
  }
}
