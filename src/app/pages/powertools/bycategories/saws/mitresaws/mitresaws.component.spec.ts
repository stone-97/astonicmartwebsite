import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitresawsComponent } from './mitresaws.component';

describe('MitresawsComponent', () => {
  let component: MitresawsComponent;
  let fixture: ComponentFixture<MitresawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MitresawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MitresawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
