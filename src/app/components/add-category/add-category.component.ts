import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
//import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  myForm:FormGroup = new FormGroup({
   /* name:new FormControl(null,[Validators.required,Validators.minLength(3),this.myCustomValidation]),
    description:new FormControl(null,Validators.required)*/
    profileInformation : new FormGroup({
      name : new FormControl(null,[Validators.required,this.myCustomValidation]),
      email : new FormControl(null,Validators.email)
    }),
    contactInformation : new FormGroup({
      mobile : new FormControl(null,Validators.pattern(new RegExp('\d*')))
    })
  });

  constructor() { }

  myCustomValidation(control:FormControl){
    if(control.value && control.value.startsWith('a')){
      return {
        myCustomValidation :true
      };
    }
  }

  ngOnInit() {
    this.myForm.setValue({
      profileInformation:{
        name: 'divya',
        email: 'dj@gmail.com'
      },
      contactInformation:{
        mobile :34535363

      }
    })
  }

  onSubmit(){
    if(this.myForm.valid){
      console.log(this.myForm.value);
    }
  }

}
