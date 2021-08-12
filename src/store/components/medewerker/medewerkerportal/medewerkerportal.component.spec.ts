import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkerportalComponent } from './medewerkerportal.component';

describe('PortalComponent', () => {
  let component: MedewerkerportalComponent;
  let fixture: ComponentFixture<MedewerkerportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedewerkerportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedewerkerportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
