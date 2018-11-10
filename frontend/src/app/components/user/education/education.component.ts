import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
import {TokenService} from "../../../services/token.service";
import {EducationForm} from  "../../../model/educationForm.model";
declare var $ :any;

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
  error=[];
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
    // DROPDOWN
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
  @Input('empid') empid: any;
  constructor(private modalService: NgbModal, public http: HttpClient, private token:TokenService) {}
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
                console.log(data);
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

    deleteEducation(id){
      // console.log(id);
        if(!confirm("Are You Sure?")){
            return false;
        }
        const token=this.token.get();
        // delete-education
        this.http.post(Constants.API_URL + 'delete-education'+'?token='+token, {id:id}).subscribe(data => {
                // console.log(data);
                // this.result=data;
                this.getAlleducation();
                $.alert({
                    title: 'Success!',
                    content: "Delete",
                });

            },
            error => {
                console.log(error.message);

            }
        );
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
              // console.log(data);
              this.result=data;
              $.alert({
                  title: 'Success!',
                  content: this.result.message,
              });
            this.getAlleducation();
            this.educationForm={
                id:'',
                institution: '',
                degreeId: '',
                result: '',
                resultoutof: '',
                board: '',
                passingyear: '',
                country: '',
            };

          },
          error => {

              const data=error.error.errors;

              for (var p in data) {

                  for (var k in data[p]) {
                      this.error.push(data[p][k]);
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
                // console.log(data);
                // this.result=data;
                $.alert({
                    title: 'Success!',
                    content: "added",
                });
                this.getAllDegree();
            },
            error => {
                console.log(error.message);

            }
        );

        this.modalRef.close();

    }

}
