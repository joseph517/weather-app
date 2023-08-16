import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-err',
  templateUrl: './alert-err.component.html',
  styleUrls: ['./alert-err.component.scss']
})
export class AlertErrComponent {

  constructor(
    public dialogResf: MatDialogRef<AlertErrComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ){}

  ngOnInit(){}

}
