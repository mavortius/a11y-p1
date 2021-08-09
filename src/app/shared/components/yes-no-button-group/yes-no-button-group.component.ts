import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from '../../services/unique-id/unique-id.service';

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => YesNoButtonGroupComponent), multi: true }]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() disabled = false;
  @Input() value: string = null;
  @Input() label = '';

  @Output() valueChange = new EventEmitter<string>();

  options = YesNoButtonGroupOptions;

  id: string = null;
  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(private uuidService: UniqueIdService) {
    this.id = uuidService.generateUniqueIdWithPrefix('yes-no-answer-label');
  }

  ngOnInit(): void {
  }

  activate(value: string): void {
    this.writeValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
