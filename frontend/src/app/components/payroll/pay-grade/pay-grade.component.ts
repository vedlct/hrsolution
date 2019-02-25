import {Component, OnInit, Renderer} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {NgxSpinnerService} from "ngx-spinner";
import {NgxPermissionsService} from "ngx-permissions";
import {Constants} from "../../../constants";
declare var $:any;
@Component({
  selector: 'app-pay-grade',
  templateUrl: './pay-grade.component.html',
  styleUrls: ['./pay-grade.component.css']
})
export class PayGradeComponent implements OnInit {

  payGradeModel:any={};
  editPayGradeModel:any={};
  payDetailsModel:any={};
  editPayDetailsModel:any={};
  payGrades:any;
  payDetails:any;
  payHeads:any;
    constructor(private modalService: NgbModal,public http: HttpClient, private token:TokenService ,
                public route:ActivatedRoute, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
      this.initModel();
      this.getPayheads();
      this.getPaygrades();
      this.getPayDetails();
    }

    initModel(){
        // Parent
        this.payGradeModel={};
        // Details
        this.payDetailsModel={};
        this.payDetailsModel.fkGradeParentId="";
        this.payDetailsModel.fkPayHeadId="";
    }

    getPayheads(){
        this.spinner.show();
        this.http.get(Constants.API_URL+'payroll/payhead/get').subscribe(data => {
                this.spinner.hide();
                // console.log(data);
                this.payHeads=data;

            },
            error => {
                this.spinner.hide();
                // this.error=error.error.error;
                console.log(error);

            }
        );
    }

    getPaygrades(){
        // payroll/paygradeparent/get
        const token = this.token.get();
        this.http.post(Constants.API_URL+'payroll/paygradeparent/get'+'?token='+token,{}).subscribe(data => {
            // console.log(data);
            this.payGrades=data;
            },

            error => {
                console.log(error);
            }
        );

    }

    getPayDetails(){
        const token = this.token.get();
        this.http.post(Constants.API_URL+'payroll/paygradedetail/get'+'?token='+token,{}).subscribe(data => {
                console.log(data);
                this.payDetails=data;
            },

            error => {
                console.log(error);
            }
        );
    }

    editPayGrade(data){
        this.editPayGradeModel=data;
        // console.log(data);
        $('#editGradeModal').modal();
    }
    editDetails(data){
        this.editPayDetailsModel=data;
        // console.log(data);
        $('#editDetailModal').modal();
    }

    insertPaygrade(){
        if(!this.payGradeModel.gradeTitle){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert Pay-grade",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }
        if(!this.payGradeModel.BASIC){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert basic",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(!this.payGradeModel.eb1Rate){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1Rate",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }


        if(!this.payGradeModel.eb1MaxTime){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(!this.payGradeModel.eb2Rate){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(!this.payGradeModel.eb2MaxTime){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }



        const token = this.token.get();

        this.http.post(Constants.API_URL+'payroll/paygradeparent/insert'+'?token='+token,this.payGradeModel).subscribe(data => {

                // console.log(data);
            this.initModel();
            this.getPaygrades();
            },

            error => {
                console.log(error);
            }
        );


    }

    updatePaygrade(){
        if(!this.editPayGradeModel.gradeTitle){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert Pay-grade",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }
        if(!this.editPayGradeModel.BASIC){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert basic",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(!this.editPayGradeModel.eb1Rate){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1Rate",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }


        if(!this.editPayGradeModel.eb1MaxTime){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(!this.editPayGradeModel.eb2Rate){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(!this.editPayGradeModel.eb2MaxTime){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }



        const token = this.token.get();

        this.http.post(Constants.API_URL+'payroll/paygradeparent/insert'+'?token='+token,this.editPayGradeModel).subscribe(data => {

                // console.log(data);
                $('#editGradeModal').modal('hide');

                this.initModel();
                this.getPaygrades();
            },

            error => {
                console.log(error);
            }
        );



    }

    insertPaygradeDetails(){
        if(this.payDetailsModel.fkGradeParentId==""){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-grade",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(this.payDetailsModel.fkPayHeadId==""){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-head",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        // console.log(this.payDetailsModel);
        const token = this.token.get();

        this.http.post(Constants.API_URL+'payroll/paygradedetail/insert'+'?token='+token,this.payDetailsModel).subscribe(data => {

                // console.log(data);

                this.initModel();
                this.getPayDetails();
            },

            error => {
                console.log(error);
            }
        );
    }

    updatePaygradeDetails(){
        if(this.editPayDetailsModel.fkGradeParentId==""){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-grade",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        if(this.editPayDetailsModel.fkPayHeadId==""){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-head",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }

        // console.log(this.payDetailsModel);
        const token = this.token.get();

        this.http.post(Constants.API_URL+'payroll/paygradedetail/insert'+'?token='+token,this.editPayDetailsModel).subscribe(data => {

                $('#editDetailModal').modal('hide');
                this.initModel();
                this.getPayDetails();
            },

            error => {
                console.log(error);
            }
        );
    }
}
