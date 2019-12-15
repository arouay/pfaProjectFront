import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material'
import { Type } from 'app/entities/type';
import { TypeService } from 'app/services/type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typeform',
  templateUrl: './typeform.component.html',
  styleUrls: ['./typeform.component.scss']
})
export class TypeformComponent implements OnInit {
  private type:Type;
  constructor(private _matDialog:MatDialog, private typeService:TypeService) { }

  ngOnInit() {
    this.type = new Type();
  }
  close(){
    this._matDialog.closeAll();
  }
  add(){
    this.typeService.newType(this.type).subscribe(
      (response)=>{
        console.log(response)
      }, (error)=>{
        console.log(error)
      }
    );
    this._matDialog.closeAll();  
  }
}
