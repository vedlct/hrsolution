import {Component, OnInit, Renderer} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../../constants";

@Component({
  selector: 'app-past-employee',
  templateUrl: './past-employee.component.html',
  styleUrls: ['./past-employee.component.css']
})
export class PastEmployeeComponent implements OnInit {
  employee:any;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject();
  id:any;
  constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    const token=this.token.get();
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL+'employee/past/get'+'?token='+token,
        type: 'POST'
      },
      columns: [
        { data: 'firstName' ,name:'employeeinfo.firstName'},
        { data: 'middleName' ,name:'employeeinfo.middleName'},
        { data: 'lastName' ,name:'employeeinfo.lastName'},
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
    this.dtTrigger.next();
    this.renderer.listenGlobal('document', 'click', (event) => {

      if (event.target.hasAttribute("data-emp-id")) {
        this.router.navigate(["employee/edit/" + event.target.getAttribute("data-emp-id")]);
      }




    });
  }


}
