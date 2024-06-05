import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoctorComponent } from './undoctor.component';

describe('UndoctorComponent', () => {
  let component: UndoctorComponent;
  let fixture: ComponentFixture<UndoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
