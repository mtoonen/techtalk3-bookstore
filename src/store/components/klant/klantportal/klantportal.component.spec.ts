import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantportalComponent } from './klantportal.component';

describe('KlantportalComponent', () => {
  let component: KlantportalComponent;
  let fixture: ComponentFixture<KlantportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlantportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
