import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorhardwaresComponent } from './doorhardwares.component';

describe('DoorhardwaresComponent', () => {
  let component: DoorhardwaresComponent;
  let fixture: ComponentFixture<DoorhardwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoorhardwaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoorhardwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
