import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionsafetygearComponent } from './constructionsafetygear.component';

describe('ConstructionsafetygearComponent', () => {
  let component: ConstructionsafetygearComponent;
  let fixture: ComponentFixture<ConstructionsafetygearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructionsafetygearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionsafetygearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
