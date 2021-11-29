import { EditBookComponent } from './../edit-book/edit-book.component';
import { AddBookComponent } from './../add-book/add-book.component';
import { Component, OnInit } from '@angular/core';
import { DeleteBookComponent } from '../delete-book/delete-book.component';


@Component({
  selector: 'app-manager-interface',
  templateUrl: './manager-interface.component.html',
  styleUrls: ['./manager-interface.component.css']
})

export class ManagerInterfaceComponent implements OnInit {

showAdd !: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clickInsert(){
    this.showAdd = true;
   }

   clickEdit(){
    this.showAdd = true;
   }

   clickRemove(){
    this.showAdd = true;
   }

}
