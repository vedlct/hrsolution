import {Component, OnInit, AfterViewInit, Renderer} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit,OnInit {

  employee:any;
  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  id:any;
  constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    const token=this.token.get();
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL+'employee/get'+'?token='+token,
        type: 'POST'
      },
      columns: [
        { data: 'firstName' ,name:'employeeinfo.firstName'},
        { data: 'EmployeeId' , name: 'employeeinfo.EmployeeId' },
        { data: 'title', name: 'hrmdesignations.title'},
        { data: 'departmentName', name: 'hrmdepartments.departmentName'},
        {

          "data": function (data: any, type: any, full: any) {
            return ' <button class="btn btn-info" data-emp-id="'+data.empid+'"> Edit</button>';
          },
          "orderable": false, "searchable":false, "name":"selected_rows"
        }
      ],
      processing: true,
      serverSide: true,
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {

      if (event.target.hasAttribute("data-emp-id")) {
        this.router.navigate(["employee/edit/" + event.target.getAttribute("data-emp-id")]);
      }




    });
  }


  getAllemployee(){
    const token=this.token.get();

    this.http.get(Constants.API_URL+'employee/get'+'?token='+token).subscribe(data => {
          // console.log(data);
          this.employee=data;
          this.dtTeigger.next();
          // console.log(data);
        },
        error => {
          console.log(error);
        }
    );

  }


}