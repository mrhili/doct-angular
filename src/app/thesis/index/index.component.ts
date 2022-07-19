import { Component, OnInit } from '@angular/core';


import { ThesisService } from '../thesis.service';
import { Thesis } from '../thesis';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  thesis: Thesis[] = [];

  constructor(public thesisService: ThesisService) { }


  ngOnInit(): void {
    this.thesisService.getAll().subscribe((data: Thesis[])=>{
      this.thesis = data;
      console.log(this.thesis);
    })
  }

  deleteThesis(id:number){
    this.thesisService.delete(id).subscribe(res => {
         this.thesis = this.thesis.filter(item => item.id !== id);
         console.log('Thesis deleted successfully!');
    })
  }

}
