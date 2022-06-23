import { Overlay } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Driver } from '../../../interfaces/driver';
import { EditDriverComponent } from './edit-driver.component';

describe('EditDriverComponent', () => {
  let component: EditDriverComponent;
  let fixture: ComponentFixture<EditDriverComponent>;
  const driver: Driver = {
    id: 1,
    lastName: 'Bottas',
    firstName: 'Valterri',
    country: 'Finland',
    birthday: new Date('1989-08-28'),
    code: 'BOT',
    countryCode: 'FI',
    penaltyPoints: 5,
    permanentNumber: '77',
    picture: '/assets/drivers/valtteri_bottas.webp',
    points: 46,
    team_id: 5,
    wins: '0',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDriverComponent],
      imports: [MatDialogModule, HttpClientModule],
      providers: [Overlay, MatDialog],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDriverComponent);
    component = fixture.componentInstance;
    component.driver = driver;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
