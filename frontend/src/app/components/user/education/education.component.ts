import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
import {TokenService} from "../../../services/token.service";
import {EducationForm} from  "../../../model/educationForm.model";


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],

})
export class EducationComponent implements OnInit {

  closeResult: string;
  result:any;
  degree: any;
  modalRef:any;
  newdegree:any;
  educationForm:any={
      institution: '',
      degreeId: '',
      result: '',
      resultoutof: '',
      board: '',
      passingyear: '',
      country: '',
  };
  educations:any;

  constructor(private modalService: NgbModal, public http: HttpClient, private token:TokenService) {}
  ngOnInit() {

    //Getting Deegree
    this.getAllDegree();
    this.getAlleducation();

  }

  getAllDegree(){
      const token=this.token.get();

      this.http.get(Constants.API_URL+'degree/get'+'?token='+token).subscribe(data => {
              // console.log(data);
              this.degree=data;
          },
          error => {
              console.log(error);
          }
      );
  }

  getAlleducation(){

      const token=this.token.get();

      this.http.get(Constants.API_URL+'education/get'+'?token='+token).subscribe(data => {
              console.log(data);
               this.educations=data;

          },
          error => {
              console.log(error);
          }
      );
  }

    editEducation(edu){
        //this.educationForm.degree = edu.degree;
         this.educationForm.result = edu.result;
         this.educationForm.institution = edu.institution;
         this.educationForm.degreeId = edu.fkDegreeId;
         this.educationForm.board = edu.boardUnivarsity;
         this.educationForm.passingyear = edu.passingYear;
         this.educationForm.resultoutof = edu.resultOutOf
        console.log(edu.result);
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

                this.getAllDegree();
            },
            error => {
                console.log(error.message);

            }
        );

        this.modalRef.close();

    }

}
