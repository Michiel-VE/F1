import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStandingComponent } from './team-standing.component';

describe('TeamStandingComponent', () => {
  let component: TeamStandingComponent;
  let fixture: ComponentFixture<TeamStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStandingComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
