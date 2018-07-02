import { Component, OnInit } from '@angular/core';
// import { DataTablesModule } from 'angular-datatables';

declare var $: any;
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable();

  }


}
