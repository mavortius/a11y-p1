import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'a11y-p1';
  form: FormGroup = null;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      yesNoAnswer: [{ value: null, disabled: false}]
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
