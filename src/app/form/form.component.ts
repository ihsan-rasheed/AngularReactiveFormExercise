import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl,ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  contactForm:FormGroup;
  submittedData:any[]=[];
  constructor(public frmBuilder:FormBuilder){
  }
  ngOnInit(): void {
    this.contactForm = this.frmBuilder.group(
      {
        name:['',Validators.required],
        slocation:['',Validators.required],
        destination:['',Validators.required],
        car:['',Validators.required],
        seats:['',[Validators.required,seatRangeValidator()]]
  
      });
  }

onSubmit(){
  if(this.contactForm?.valid){
    const formData = this.contactForm?.value;
    this.submittedData.push(formData);
    this.contactForm.reset()
  }
  else{
    alert('Form invalid');
  }
  
}
}

function seatRangeValidator(): Validators {

  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (value === null || value < 0 || value > 8) {

      return { seatRange: true };

    }

    return null;

  };
}
