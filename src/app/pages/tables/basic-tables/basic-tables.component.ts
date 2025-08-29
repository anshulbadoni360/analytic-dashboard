import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { BasicTableThreeComponent } from '../../../shared/components/tables/basic-tables/basic-table-three/basic-table-three.component';
import { ApiService } from '../../../shared/service/api-service/api.service';


@Component({
  selector: 'app-basic-tables',
  imports: [
    PageBreadcrumbComponent,
    BasicTableThreeComponent
  ],
  templateUrl: './basic-tables.component.html',
  styles: ``
})
export class BasicTablesComponent { }
