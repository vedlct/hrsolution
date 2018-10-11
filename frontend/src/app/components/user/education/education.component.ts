import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
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
  country: any;
  modalRef:any;
  newdegree:any;
  error:any;
  educationForm:any={
      id:'',
      institution: '',
      degreeId: '',
      result: '',
      resultoutof: '',
      board: '',
      passingyear: '',
      country: '',
  };
  educations:any;
  @Input('empid') empid: any;
  constructor(private modalService: NgbModal, public http: HttpClient, private token:TokenService) {}
  ngOnInit() {

    //Getting Deegree
    this.getAllDegree();
    this.getAlleducation();
    this.getAllCountry();

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

    getAllCountry(){
        const token=this.token.get();
        this.http.get(Constants.API_URL+'country/basic'+'?token='+token).subscribe(data => {
                // console.log(data);
                this.country=data;
            },
            error => {
                console.log(error);
            }
        );
    }

  getAlleducation(){

      const token=this.token.get();
      this.http.get(Constants.API_URL+'education/get/'+this.empid+'?token='+token).subscribe(data => {
              // console.log(data);
              this.educations=data;

          },
          error => {
              console.log(error);
          }
      );
  }

    selectCountry(value){
        this.educationForm.country=value;
    }
    editEducation(edu){
        // console.log(edu);
        //this.educationForm.degree = edu.degree;
         this.educationForm.result = edu.result;
         this.educationForm.institution = edu.institution;
         this.educationForm.degreeId = edu.fkDegreeId;
         this.educationForm.board = edu.boardUnivarsity;
         this.educationForm.passingyear = edu.passingYear;
         this.educationForm.resultoutof = edu.resultOutOf;
         this.educationForm.country = edu.fkCountry;
         this.educationForm.id = edu.id;
        // console.log(edu.result);
    }

  selectDegree(value){
    this.educationForm.degreeId=value;
  }

  openLg(content) {
       this.modalRef =  this.modalService.open(content, {});

  }

  saveEducation(){
      // education/post/{empId}
      const token=this.token.get();
      this.http.post(Constants.API_URL + 'education/post/'+this.empid+'?token='+token,this.educationForm).subscribe(data => {
              console.log(data);
            this.getAlleducation();

          },
          error => {
              // console.log(error.error);
              // console.log(error.error.errors);
              // console.log(error.error.errors);
              this.error=error.error.errors;
              const data=error.error.errors;

              for (var p in data) {

                  for (var k in data[p]) {
                      console.log(data[p][k]) ;
                  }
              }

          }
      );

      // console.log(this.educationForm);
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
