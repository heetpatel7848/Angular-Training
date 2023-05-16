import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})


export class ReactiveformComponent implements OnInit {
  genders = ['Male', 'Female'];
  userForm!: FormGroup;
  forbiddenPasswords = ['123456789', 'abcdefghi']

  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  // initializeForm() {
  //   this.userForm = new FormGroup({
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     password: new FormControl(null, [Validators.required]),
  //     location: new FormControl(null, [Validators.required]),
  //     gender: new FormControl('Male', [Validators.required]),
  //     rememberMe: new FormControl(null, [Validators.required])
  //   });
  // }

  initializeForm() {
    this.userForm = new FormGroup({
      login: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email,])
      })
    })
  }


  checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@admin.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 3000)
    });
    return promise;
  }


  onSubmit() {
    console.log('this.userForm :-', this.userForm);
  }

}