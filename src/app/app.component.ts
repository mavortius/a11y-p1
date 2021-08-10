import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalService } from './shared/components/modal/modal.service';
import { ModalRef } from './shared/components/modal/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;
  firstName = 'Marcelo';
  modalRef: ModalRef;
  form: FormGroup;

  constructor(private modalService: ModalService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Marcelo', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.modalRef.close();
  }

  showModal(): void {
    this.modalRef = this.modalService.open({
      ref: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
