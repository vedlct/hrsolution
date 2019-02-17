import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  teams:any;
  modalRef:any;

  teamObj:any={
    teamId:"",
    teamName:""
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

    this.http.get(Constants.API_URL+'team/get'+'?token='+token).subscribe(data => {
          // console.log(data);
          this.teams=data;
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
    this.teamObj={};
    this.modalRef =  this.modalService.open(content, { size: 'lg'});

  }

  onSubmit(){

    // shift/post
    const token=this.token.get();

    this.http.post(Constants.API_URL+'team/post'+'?token='+token,this.teamObj).subscribe(data => {
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
    for(i;i<this.teams.length;i++){
      if(this.teams[i].teamId==id){

        this.teamObj.teamName=this.teams[i].teamName;
        this.teamObj.teamId=this.teams[i].teamId;
        break;
      }
    }
    this.modalRef =  this.modalService.open(content, { size: 'lg'});

  }


}
