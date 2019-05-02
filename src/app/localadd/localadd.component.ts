import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Local } from 'src/models/local';


@Component({
  selector: 'app-localadd',
  templateUrl: './localadd.component.html',
  styleUrls: ['./localadd.component.scss']
})
export class LocaladdComponent implements OnInit {
  messageForm: FormGroup;
  local: Local
  constructor(private formBuilder: FormBuilder,

    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public dados: any,
    public dialogRef: MatDialogRef<LocaladdComponent>) {
    if (dados != "")
      this.local = dados;
    else
      this.local = new Local();
  }

  onSubmit() {
    this.dataService.postLocal(this.local);
    this.dialogRef.close();
  }

  onCancelar() {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}
