import { Component, OnInit } from '@angular/core';

import { ThesisService } from '../thesis.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';


/* interface Thesis{
  name: string;
} */

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  // thesis:Thesis;

  form!: FormGroup;

  constructor(
    public thesisService: ThesisService,
    private router: Router
  ) { }
  /**
   * Write code on Method
   *
   * @return response()
   */
   ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  
  /**
   * Write code on Method
   *
   * @return response()
   */
   get f(){
    return this.form.controls;
  }
   
  /**
   * Write code on Method
   *
   * @return response()
   */
   submit(){
    console.log(this.form.value);
    this.thesisService.create(this.form.value).subscribe((res:any) => {
         console.log('Thesis created successfully!');
         this.router.navigateByUrl('thesis/index');
    })
  }


  
}
