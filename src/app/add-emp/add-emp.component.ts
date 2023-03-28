import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../serviece/service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  formValue=new FormGroup({
    empno:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    salary:new FormControl(''),

  })
  constructor( private http:ServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   


addEmp()//to add data in to db.json
{
  console.log(this.formValue.value);
  
  this.http.addEmpService(this.formValue.value).subscribe(res=>{
  
    
  })
  
}

}
