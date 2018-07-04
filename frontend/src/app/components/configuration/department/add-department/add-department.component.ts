import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  @Input('master') data:any;

  constructor() { }

  ngOnInit() {
    // console.log(this.data);
  }

}
