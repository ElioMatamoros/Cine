import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    NgbModule
  ],
  exports: [FormComponent]
})
export class FormularioModule { }
