import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reg!:FormGroup;
  id="";
  name="";
  constructor(private fo:FormBuilder){
  }
  
  ngOnInit(){
    this.reg=this.fo.group({
      id:new FormControl("",Validators.required),
      name:new FormControl(),
      email: new FormControl()
    })
  }
  onSubmit(){
    console.log(this.reg.value);
    this.reg.reset();
  }


  // Template-Driven Form:
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  onSubmitForm(regForm:NgForm){
    console.log(regForm.value);
    regForm.reset();
  }
}
