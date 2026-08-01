import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolesawsComponent } from './holesaws.component';

describe('HolesawsComponent', () => {
  let component: HolesawsComponent;
  let fixture: ComponentFixture<HolesawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolesawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolesawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
