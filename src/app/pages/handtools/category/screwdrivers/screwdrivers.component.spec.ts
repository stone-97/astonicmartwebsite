import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewdriversComponent } from './screwdrivers.component';

describe('ScrewdriversComponent', () => {
  let component: ScrewdriversComponent;
  let fixture: ComponentFixture<ScrewdriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrewdriversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrewdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
