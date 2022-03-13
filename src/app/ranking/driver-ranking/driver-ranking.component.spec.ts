import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRankingComponent } from './driver-ranking.component';

describe('DriverRankingComponent', () => {
  let component: DriverRankingComponent;
  let fixture: ComponentFixture<DriverRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
