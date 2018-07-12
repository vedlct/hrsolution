import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
import {TokenService} from "../../../services/token.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],

})
export class EducationComponent implements OnInit {

  closeResult: string;
  degree: any;
    modalRef:any;
  newdegree:any;
  educationForm:any={
    institution:'',
    degree:'',
    result:'',
    resultoutof:'',
    board:'',
    passingyear:'',
    country:'',
  };
  constructor(private modalService: NgbModal, public http: HttpClient, private token:TokenService) {}
  ngOnInit() {

    //Getting Deegree
    this.getAllDegree();
  }

  getAllDegree(){

      this.http.get(Constants.API_URL+'degree/get').subscribe(data => {
              // console.log(data);
              this.degree=data;
          },
          error => {
              console.log(error);
          }
      );
  }

  selectDegree(value){


  this.educationForm.degree=value;
  }

  openLg(content) {
       this.modalRef =  this.modalService.open(content, {});

  }


    onSubmit(content){


        let fd = new FormData();
        fd.append('degree',this.newdegree);
        const token=this.token.get();
        this.http.post(Constants.API_URL + 'degree/insert'+'?token='+token, fd).subscribe(data => {
                console.log(data);
            // this.getAllDegree();
            },
            error => {
                console.log(error.message);

            }
        );


       alert(this.newdegree);
        this.modalRef.close();

    }

}
