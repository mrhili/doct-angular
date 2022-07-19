import { Component, OnInit } from '@angular/core';
import { ThesisService } from '../thesis.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Thesis } from '../thesis';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  thesis!: Thesis;
  // thesis:Thesis;

  form!: FormGroup;

  constructor(
    public thesisService: ThesisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  /**
   * Write code on Method
   *
   * @return response()
   */
   ngOnInit(): void {
    this.id = this.route.snapshot.params['idThesis'];

    this.thesisService.find(this.id).subscribe((data: Thesis)=>{
      this.thesis = data;
    });

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
    this.thesisService.update(this.id,this.form.value).subscribe((res:any) => {
         console.log('Thesis updated successfully!');
         this.router.navigateByUrl('thesis/index');
    })
  }


  
}
