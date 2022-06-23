import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogData } from '../../../interfaces/dialogData';
import { Driver } from '../../../interfaces/driver';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit{
  driver!: Driver;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    console.log('data', this.data);
  }

  closeModal(): void{
    this.dialogRef.close(this.data);
  }

}
