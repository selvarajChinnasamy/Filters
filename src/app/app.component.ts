import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  FilterForm: FormGroup;
  constructor(private formBuilder: FormBuilder){}
  buildForm(){
    this.FilterForm = this.formBuilder.group({
      Kgs: this.formBuilder.array([this.CreateControls()]),
      Stock: this.formBuilder.array([this.CreateControls()]),
      Price: this.formBuilder.array([this.CreateControls()]),
    });
  }
  ngOnInit(){
this.buildForm();
  }
  CreateControls(): FormGroup {
    return this.formBuilder.group({
      first: [false, [Validators.required]],
      second: [false, [Validators.required]],
      thired: [false, [Validators.required]],
      fourth: [false, [Validators.required]],
      fifth: [false, [Validators.required]],
      sixth: [false, [Validators.required]],
    });
  }
}
