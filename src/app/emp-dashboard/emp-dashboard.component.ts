import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../serviece/service.service';
import { UpdateComponent } from '../update/update.component';
import { ViewEmpComponent } from '../view-emp/view-emp.component';


@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor(private http: ServiceService, public dialog: MatDialog) { }

  empData: any  //this variable store the data which is comming from the db.json 

  ngOnInit(): void {
    this.http.getEmpService().subscribe(res => {     //to get data from the db.json to table
      this.empData = res;
    })
  }

  // to delete data
  deleteEmp(id: any) {
    this.http.deleteEmpService(id).subscribe(res => {

    })
    location.reload()

  }

  //to view emp details
  viewEmp(data1: any) {
    this.dialog.open(ViewEmpComponent, {
      data: {
        id: data1.id,
        name: data1.name,
        email: data1.email,
        salary: data1.salary
      },
    });
  }
//to update data
updateEmp(data2:any)
{
  
    this.dialog.open(UpdateComponent , {
      data: {
        id: data2.id,
        name: data2.name,
        email: data2.email,
        salary: data2.salary,
        empno:data2.empno
      },
    });
  
}
}

