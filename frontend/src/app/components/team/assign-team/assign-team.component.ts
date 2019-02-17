import {Component, OnInit, AfterViewInit, Renderer, OnDestroy, ViewChild} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
declare var $ :any;

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.css']
})
export class AssignTeamComponent implements AfterViewInit,OnDestroy,OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  employee:any;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject();
  id:any;
  allEmp=[];
  teamId:number;
  team:any;
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
    // this.getShift();
    this.getTeam();

  }
  onItemSelect(value){
    // console.log(value);
  }
  onSelectAll(value){
    // console.log(value);
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
        data:function (d){

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
        { data: 'teamName', name: 'team.teamName'},

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
        // console.log(id);
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
    this.teamId=value;
    // console.log(this.teamId);
  }


  assignTeam(){

    if(this.teamId == null  || this.allEmp.length ==0){
      alert("Please Select All");
    }
    else {


      let form={
        allEmp:this.allEmp,
        teamId:this.teamId,

      };
      const token=this.token.get();

      // console.log(form);

      this.http.post(Constants.API_URL+'team/assign'+'?token='+token,form).subscribe(data => {
            console.log(data);
            this.rerender();
          },
          error => {
            console.log(error);
          }
      );
    }
  }


  rerender(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

      dtInstance.destroy();

      this.dtTrigger.next();
    });
  }

}
