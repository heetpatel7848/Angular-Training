import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductCreate(products: { pName: string, desc: string, price: string }) {
    console.log(products);


    this.http.post('https://http-demo-60c0a-default-rtdb.firebaseio.com/.json', products).subscribe((res) => {
      console.log(res);
    })


  }

  private fetchProducts() {
    this.http.get('https://http-demo-60c0a-default-rtdb.firebaseio.com/.json').subscribe((res) => {
      console.log(res);

    })
  }
  // userForm!: FormGroup;
  // location = ["new-york"];

  // ngOnInit(): void {
  //   this.initializeForm();
  // }


  // createuser() {
  //   let obj = {
  //     name: "heet",
  //     location: "new-york",

  //   }
  //   this.http.post('https://http-demo-60c0a-default-rtdb.firebaseio.com/.json', obj).subscribe((res) =>
  //     console.log(res),
  //     (err) => {
  //       console.error(err);
  //     }
  //   )

  // }

  // updateuser() {
  //   let obj = {
  //     name: "yash",
  //     location: "dubai",

  //   }

  //   this.http.put('https://http-demo-60c0a-default-rtdb.firebaseio.com/.json', obj).subscribe((res) =>
  //     console.log(res),
  //     (err) => {
  //       console.error(err);

  //     })
  // }

  // // deleteuser() {
  // //   this.http.delete('/-NVUNstDFZsD31Do5nHP').subscribe((res) => {
  // //     console.log(res);
  // //   })
  // // }

  // initializeForm() {
  //   this.userForm = new FormGroup({
  //     login: new FormGroup({
  //       name: new FormControl(null, [Validators.required, Validators.email,]),
  //       location: new FormControl(null, [Validators.required, Validators.required])
  //     })

  //   })
  // }



}