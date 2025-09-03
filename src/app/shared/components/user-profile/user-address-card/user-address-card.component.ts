import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { LabelComponent } from '../../form/label/label.component';
import { ModalComponent } from '../../ui/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../service/api-service/api.service';
import { ComponentCardComponent } from "../../common/component-card/component-card.component";
import { BasicTableThreeComponent } from "../../tables/basic-tables/basic-table-three/basic-table-three.component";

@Component({
  selector: 'app-user-address-card',
  imports: [
    CommonModule,
    ButtonComponent,
    ModalComponent,
    FormsModule,
  ],
  templateUrl: './user-address-card.component.html',
  styles: ``
})
export class UserAddressCardComponent {

  @Input() survey: any = {};
  allAnswers: any[] = [];

  constructor(public modal: ModalService, private apiService: ApiService) { }

  isOpen = false;
  openModal() { this.isOpen = true; }
  closeModal() { this.isOpen = false; }

  address = {
    country: 'United States.',
    cityState: 'Phoenix, Arizona, United States.',
    postalCode: 'ERT 2489',
    taxId: 'AS4568384',
  };

  findAnswers(qs_id: any) {
    console.log(qs_id);
    this.apiService.getSurveyQuestionAnswers(qs_id).subscribe(data => {
      this.allAnswers = data;
      console.log(this.allAnswers, "this answers");
    })
    const data = {
      su_id: this.survey._id.$oid,
      qs_id: qs_id
    }
    this.apiService.postSurveyAnswer(this.survey._id.$oid, qs_id).subscribe(data => {
      console.log(data);
    })

    this.openModal();
  }

  handleSave() {
    // Handle save logic here
    console.log('Saving changes...');
    this.modal.closeModal();
  }
}
