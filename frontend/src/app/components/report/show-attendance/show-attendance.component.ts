import {Component, OnInit, AfterViewInit, Renderer, OnDestroy, ViewChild} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
declare var $ :any;

@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.css']
})
export class ShowAttendanceComponent implements OnInit {

    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    employee:any;
    dtOptions:DataTables.Settings={};
    dtTrigger:Subject<any>=new Subject();
    dtInstance:DataTables.Api;

    dtOptions2:DataTables.Settings={};
    dtTrigger2:Subject<any>=new Subject();
    dtInstance2:DataTables.Api;

    empid:any;
    attendanceData:any;

    startDate:string;
    endDate:string;

    leaves:any;
    checkTable=0;

    constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.empid =this.route.snapshot.params.id;
      this.startDate =this.route.snapshot.params.fromdate;
      this.endDate =this.route.snapshot.params.todate;

      $('#startDate').val(this.startDate);
      $('#endDate').val(this.endDate);

      this.getData();
      this.getLeave();
  }

  getLeave(){
      const token=this.token.get();

      let id=this.empid;

      this.http.post(Constants.API_URL+'leave/getLeaveRequests/'+id+'?token='+token,{startDate:this.startDate,endDate:this.endDate}).subscribe(data => {
              console.log(data);
              this.leaves=data;
              // this.dtTrigger2.next();
              if(this.checkTable==0){
                  this.dtTrigger2.next();
                  this.checkTable++;
              }



          },
          error => {
              console.log(error);
          }
      );
  }

  getData(){
        const token=this.token.get();

        let id=this.empid;



      this.dtOptions = {
          ajax: {
              url: Constants.API_URL+'report/getEmployeeAttendance'+'?token='+token,
              type: 'POST',
              data:function (d:any){
                  d.id=id;
                  d.startDate=$('#startDate').val();
                  d.endDate=$('#endDate').val();

              },
          },
          columns: [

              { data: 'attDeviceUserId' ,name:'attDeviceUserId'},
              { data: 'firstName' ,name:'firstName'},
              { data: 'attendanceDate' ,name:'attendanceDate'},
              { data: 'checkInFull' , name: 'checkInFull' },
              { data: 'checkoutFull', name: 'checkoutFull'},
              { data: 'late', name: 'late'},
              { data: 'lateTime', name: 'lateTime'},
              { data: 'scheduleIn', name: 'scheduleIn'},
              { data: 'scheduleOut', name: 'scheduleOut'},
              { data: 'workingTime', name: 'workingTime'},


          ],
          processing: true,
          serverSide: true,
          pagingType: 'full_numbers',
          pageLength: 10
      };

  }


    ngAfterViewInit(): void {
        this.dtTrigger.next();
        // this.renderer.listenGlobal('document', 'click', (event) => {
        //     if (event.target.hasAttribute("data-emp-id")) {
        //
        //         let id=event.target.getAttribute("data-emp-id");
        //         this.router.navigate(["report/attendance/" +id]);
        //     }
        //
        //
        //
        //
        // });
    }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    search(){
        this.rerender();
    }

    rerender(){
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

            dtInstance.destroy();

            this.dtTrigger.next();
        });
    }


}
