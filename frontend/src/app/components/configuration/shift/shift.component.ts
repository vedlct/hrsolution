import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  shifts:any;
  modalRef:any;

  shiftObj:any={
    shiftId:"",
    shiftName:"",
    inTime:"",
    outTime:""
  };
  checkTable=0;

  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  constructor(private modalService: NgbModal,private http:HttpClient,private token:TokenService) { }

  ngOnInit() {
    this.getShift();
  }

  getShift(){
    const token=this.token.get();
    this.http.get(Constants.API_URL+'shift/get'+'?token='+token).subscribe(data => {
          console.log(data);
          this.shifts=data;
          if(this.checkTable==0){
            this.dtTeigger.next();
            this.checkTable++;
          }


        },
        error => {
          console.log(error);
        }
    );
  }

  openLg(content) {
    this.shiftObj={};
    this.modalRef =  this.modalService.open(content, { size: 'lg'});

  }

  onSubmit(){

    // shift/post
    const token=this.token.get();

    this.http.post(Constants.API_URL+'shift/post'+'?token='+token,this.shiftObj).subscribe(data => {
          // console.log(data);
          this.getShift();

        },
        error => {
          console.log(error);
        }
    );

    this.modalRef.close();
  }

  edit(id,content){

    let i=0;
    for(i;i<this.shifts.length;i++){
      if(this.shifts[i].shiftId==id){
        this.shiftObj.inTime=this.shifts[i].inTime;
        this.shiftObj.outTime=this.shifts[i].outTime;
        this.shiftObj.shiftName=this.shifts[i].shiftName;
        this.shiftObj.shiftId=this.shifts[i].shiftId;
        break;
      }
    }
    this.modalRef =  this.modalService.open(content, { size: 'lg'});

  }


}