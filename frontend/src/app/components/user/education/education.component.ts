import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],

})
export class EducationComponent implements OnInit {

  closeResult: string;
  degree: any;
  educationForm:any={
    institution:'',
    degree:'',
    result:'',
    resultoutof:'',
    board:'',
    passingyear:'',
    country:'',
  };

  constructor(private modalService: NgbModal, public http: HttpClient) {}
  ngOnInit() {

    //Getting Deegree
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
    this.modalService.open(content, {  });
  }
}
