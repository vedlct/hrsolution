import {Component, OnInit, AfterViewInit, Renderer, OnDestroy, ViewChild} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
declare var $ :any;

@Component({
  selector: 'app-shift-assign',
  templateUrl: './shift-assign.component.html',
  styleUrls: ['./shift-assign.component.css']
})
export class ShiftAssignComponent implements AfterViewInit,OnDestroy,OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  employee:any;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject();
  id:any;
  allEmp=[];
  team:any;
  shiftId:number;
  shift:any;
  dtInstance:DataTables.Api;
  startDate:string;
  // DROPDOWN
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.dropdownList = [
          { item_id: 'saturday', item_text: 'Saturday' },
          { item_id:'sunday', item_text: 'Sunday' },
          { item_id: 'monday', item_text: 'Monday' },
          { item_id: 'tuesday', item_text: 'Tuesday' },
          { item_id: 'wednesday', item_text: 'Wednesday' },
          { item_id: 'thursday', item_text: 'Thursday' },
          { item_id:'friday', item_text: 'Friday' }
      ];

      this.dropdownSettings = {
          singleSelection: false,
          idField: 'item_id',
          textField: 'item_text',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
      };
  this.getData();
  this.getShift();
  this.getTeam();

  }
  onItemSelect(value){
    // console.log(value);
  }
  onSelectAll(value){
    // console.log(value);
  }

  getShift(){
    const token=this.token.get();

    this.http.get(Constants.API_URL+'shift/get'+'?token='+token).subscribe(data => {
          this.shift=data;
          // console.log(data);
        },
        error => {
          console.log(error);
        }
    );

  }
  getTeam(){
    const token=this.token.get();

    this.http.get(Constants.API_URL+'team/get'+'?token='+token).subscribe(data => {
          // console.log(data);
          this.team=data;


        },
        error => {
          console.log(error);
        }
    );
  }
  getData(){
    const token=this.token.get();
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL+'employee/shift/get'+'?token='+token,
        type: 'POST',
        data:function (d:any){
          d.teamId=$("#team").val();
        },
      },
      columns: [
        {

          "data": function (data: any, type: any, full: any) {
            return '<input type="checkbox" class="chk form-control" name="selected_rows[]" value="'+ data.empid +'" data-emp-id="'+data.empid+'">';
          },
          "orderable": false, "searchable":false, "name":"selected_rows"
        },
        { data: 'firstName' ,name:'employeeinfo.firstName'},
        { data: 'middleName' ,name:'employeeinfo.middleName'},
        { data: 'lastName' ,name:'employeeinfo.lastName'},
        { data: 'EmployeeId' , name: 'employeeinfo.EmployeeId' },
        { data: 'shiftName', name: 'shift.shiftName'},
        { data: 'weekend', name: 'shiftlog.weekend'},
        { data: 'startDate', name: 'shiftlog.startDate'},

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

        let id=event.target.getAttribute("data-emp-id");
        console.log(id);
        let index = this.allEmp.indexOf(id.toString());
        if (index == -1){
          this.allEmp.push(id);
        }else {
          this.allEmp.splice(index, 1);
        }
        // console.log(this.allEmp);
      }




    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  selectAll(){
    this.allEmp=[];
    if($('#selectall2').is(":checked")) {

    let  checkboxes = document.getElementsByName('selected_rows[]');

     $('input:checkbox').prop('checked',true);

      let that=this;
      $(".chk:checked").each(function () {
        that.allEmp.push($(this).val());
      });
      // console.log(this.allEmp);
    }
    else {

      $(':checkbox:checked').prop('checked',false);
    }

  }

  selectShift(value){
    // this.getData();
    this.shiftId=value;
    console.log(this.shiftId);
  }


  assignShift(){

    // console.log(this.selectedItems);
    // return false;

    if(this.shiftId == null || this.startDate ==null || this.allEmp.length ==0 || this.selectedItems.length==0){
      alert("Empty");
    }
    else {
        // new Date(this.employeeJoiningForm.actualJoinDate).toLocaleDateString();

      let form={
        allEmp:this.allEmp,
        shiftId:this.shiftId,
        startDate:new Date(this.startDate).toLocaleDateString(),
        weekends:this.selectedItems
      };
      const token=this.token.get();

      this.http.post(Constants.API_URL+'shift/assign'+'?token='+token,form).subscribe(data => {
            console.log(data);
            this.rerender();

          },
          error => {
            console.log(error);
          }
      );
    }


  }

  selectTeam(){
    this.rerender();
  }
  rerender(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

      dtInstance.destroy();

      this.dtTrigger.next();
    });
  }

}
