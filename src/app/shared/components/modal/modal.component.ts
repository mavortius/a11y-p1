import { Component, HostBinding } from '@angular/core';

import { ModalConfig } from './modal-config';
import { fade } from '../../animations/fade';
import { ModalRef } from './modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent {
  @HostBinding('@fade')
  fade = true;

  config: ModalConfig;
  modalRef: ModalRef;
}
