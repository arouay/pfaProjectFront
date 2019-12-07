import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-factureform',
  templateUrl: './factureform.component.html',
  styleUrls: ['./factureform.component.scss']
})
export class FactureformComponent implements OnInit {

  constructor(private _matDialog: MatDialog) { }

  ngOnInit() {
  }
  close() {
    this._matDialog.closeAll();
  }
}
