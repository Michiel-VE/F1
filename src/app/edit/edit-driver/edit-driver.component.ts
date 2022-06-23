import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { Driver } from '../../../interfaces/driver';
import { DataService } from '../../shared/data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css'],
})
export class EditDriverComponent implements OnDestroy {
  @Input() driver!: Driver;
  faEdit = faEdit;
  driverSub: Subscription = new Subscription();
  dialogSub: Subscription = new Subscription();

  constructor(private dialog: MatDialog, private driverService: DataService) {
  }

  ngOnDestroy(): void {
    this.driverSub.unsubscribe();
    this.dialogSub.unsubscribe();
  }

  openModal(id: number): void {
    this.driverSub = this.driverService.getDriver(id).subscribe((driver: Driver) => {
      this.driver = driver;
      this.fillModal();
    });
  }

  fillModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: this.driver,
    });

   this.dialogSub = dialogRef.afterClosed().subscribe((result: Driver) => {
     this.driverService.updateDriver(result, result.id).subscribe();
    });
  }
}
