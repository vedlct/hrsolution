import {Component, OnInit, AfterViewInit, Renderer} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-requested-appraisal-list',
  templateUrl: './requested-appraisal-list.component.html',
  styleUrls: ['./requested-appraisal-list.component.css']
})
export class RequestedAppraisalListComponent implements AfterViewInit,OnInit {


  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject();
  result:any;


  constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getAppraisalList();
    this.getAppraisalResult();
  }

  getAppraisalResult(){
    // appraisal/getRequestedAppraisalResult
    const token=this.token.get();
    this.http.get(Constants.API_URL+'appraisal/getRequestedAppraisalResult'+'?token='+token).subscribe(data => {
          this.result=data;
         console.log(data);
      },
      error => {
        console.log(error);

      }
    );

  }

  showResultPage(id){
    // appraisal/appraisal-result/:id
    const url = "appraisal/appraisal-result/" + id;

    this.router.navigate([url]);

  }
  getAppraisalList() {

    const token=this.token.get();
    let form={
      'userId':JSON.parse(localStorage.getItem('user')).id,
    };
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL+'appraisal/getRequestedAppraisalList'+'?token='+token,
        type: 'POST',
        data: form
      },
      columns: [
        { data: 'firstName' ,name:'employeeinfo.firstName'},
        { data: 'middleName' ,name:'employeeinfo.middleName'},
        { data: 'lastName' ,name:'employeeinfo.lastName'},
        { data: 'appraisalRoleName' ,name:'appraisalrole.appraisalRoleName'},

        {

          "data": function (data: any, type: any, full: any) {
            return ' <button class="btn btn-info" data-appraisal-setup-id="'+data.empAppSetupId+'"> Start</button>'
               ;
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

      if (event.target.hasAttribute("data-appraisal-setup-id")) {
        const url = "appraisal/requested-appraisal-form/" + event.target.getAttribute("data-appraisal-setup-id");
        // this.router.navigate([])
        //   .then(result => {  window.open(url, '_blank'); });
        this.router.navigate([url]);

      }



    });
  }

}
