import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

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

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {

  }

  showModal(): void {
    this.modalRef = this.modalService.open({
      ref: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
