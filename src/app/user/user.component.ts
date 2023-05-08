import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild('f')
  firstTdForm!: NgForm;

  location = 'new-york';
  gender = ['male', 'female'];
  user = { email: '', password: '', location: '', gender: '', remember: false };
  submitted = false;

  constructor() {}

  ngOnInit() {}

  // submit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.firstTdForm);
    this.submitted = true;
    this.user.email = this.firstTdForm.value.email;
    this.user.gender = this.firstTdForm.value.gender;
    this.user.password = this.firstTdForm.value.password;
    this.user.location = this.firstTdForm.value.location;
    this.user.remember = this.firstTdForm.value.remember;

    this.firstTdForm.reset();
  }

  resetform() {
    this.firstTdForm.reset();
  }

  setValueMethod() {
    this.firstTdForm.setValue({
      email: 'name@gmail.com',
      password: '123456789',
      location: 'new-york',
      gender: 'male',
      remember: 'true',
    });
  }

  patchValueMethod() {
    this.firstTdForm.setValue({
      email: 'example@gmail.com',
      password: '11111111',
      location: 'chicago',
      gender: 'female',
      remember: 'false',
    });
  }
}
