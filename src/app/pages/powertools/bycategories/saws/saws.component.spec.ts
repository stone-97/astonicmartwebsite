import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawsComponent } from './saws.component';

describe('SawsComponent', () => {
  let component: SawsComponent;
  let fixture: ComponentFixture<SawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
