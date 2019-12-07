import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material'
@Component({
  selector: 'app-typeform',
  templateUrl: './typeform.component.html',
  styleUrls: ['./typeform.component.scss']
})
export class TypeformComponent implements OnInit {

  constructor(private _matDialog:MatDialog) { }

  ngOnInit() {
  }
  close(){
    this._matDialog.closeAll();
  }
}
