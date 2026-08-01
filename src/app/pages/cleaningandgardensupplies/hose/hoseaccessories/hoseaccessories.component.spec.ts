import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseaccessoriesComponent } from './hoseaccessories.component';

describe('HoseaccessoriesComponent', () => {
  let component: HoseaccessoriesComponent;
  let fixture: ComponentFixture<HoseaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoseaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoseaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
