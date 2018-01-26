import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public listService: ListService ) { }

  editable = false ;

  showInput (item) {
    this.editable = true;
  }

  hideInput (item) {
    this.editable = false;
  }



  ngOnInit() {
  }

}
