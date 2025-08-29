import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { UserMetaCardComponent } from '../../shared/components/user-profile/user-meta-card/user-meta-card.component';
import { UserInfoCardComponent } from '../../shared/components/user-profile/user-info-card/user-info-card.component';
import { UserAddressCardComponent } from '../../shared/components/user-profile/user-address-card/user-address-card.component';
import { ApiService } from '../../shared/service/api-service/api.service';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    PageBreadcrumbComponent,
    UserMetaCardComponent,
    UserInfoCardComponent,
    UserAddressCardComponent,
  ],
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent implements OnInit {
  survey: any = {}
  //survey id from qyery param
  survey_id = ''
  constructor(private apiService: ApiService) {
    // get id from query param
    this.survey_id = window.location.search.split('=')[1]
  }

  ngOnInit() {
    this.apiService.getSurvey(this.survey_id).subscribe(data => {
      this.survey = data
      console.log(this.survey, "this survey");

    })
  }

}
